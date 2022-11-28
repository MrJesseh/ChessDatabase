const PlayerProfile = require('./models/PlayerProfile');

class Database {
    constructor(){}

    async createPlayerProfile(username){
        // Verify that the player doesn't already have a profile.
        let data = await this.getPlayerProfile(username);
        if(data != null){return false;}

        // Attempt to create a new profile.
        try{
            await new PlayerProfile({
                username: username,
                gamesPlayed: 0,
                wins: 0,
                losses: 0,
                totalMoves: 0
            }).save();
        }catch(error){
            console.log(error);
            return false;
        }
        return true;
    }

    async getPlayerProfile(username){
        // Attempt to get player's profile.
        let data;
        try{
            data = await PlayerProfile.findOne({username: username});
        }catch(error){
            console.log(error);
            return null;
        }

        // Verify that data exists.
        if(data == null || data == undefined || data == []){
            return null;
        }else{
            return data;
        }
    }

    async deletePlayerProfile(username){

    }

    async resetPlayerProfile(username){
        // Verify that the player's profile exists.
        let data = await this.getPlayerProfile(username);
        if(data == null){return false;}

        // If the data exists, increment their wins by amount.
        try{
            await PlayerProfile.updateOne({username: username}, {
                gamesPlayed: 0,
                wins: 0,
                losses: 0,
                totalMoves: 0
            });
        }catch(error){
            console.log(error);
        }
        return true;
    }

    async incrementPlayerWins(username, amount){
        // Verify that the player's profile exists.
        let data = await this.getPlayerProfile(username);
        if(data == null){return false;}

        // If the data exists, increment their wins by amount.
        try{
            let currentWins = data.wins;
            let newWins = currentWins + amount;

            await PlayerProfile.updateOne({username: username}, {
                wins: newWins
            });
        }catch(error){
            console.log(error);
        }
        return true;
    }

    async incrementPlayerLosses(username, amount){
        // Verify that the player's profile exists.
        let data = await this.getPlayerProfile(username);
        if(data == null){return false;}

        // If the data exists, increment their wins by amount.
        try{
            let currentLosses = data.losses;
            let newLosses = currentLosses + amount;

            await PlayerProfile.updateOne({username: username}, {
                losses: newLosses
            });
        }catch(error){
            console.log(error);
        }
        return true;
    }

    async incrementPlayerGamesPlayed(username, amount){
        // Verify that the player's profile exists.
        let data = await this.getPlayerProfile(username);
        if(data == null){return false;}

        // If the data exists, increment their wins by amount.
        try{
            let currentGames = data.gamesPlayed;
            let newGames = currentGames + amount;

            await PlayerProfile.updateOne({username: username}, {
                gamesPlayed: newGames
            });
        }catch(error){
            console.log(error);
        }
        return true;
    }

    async incrementPlayerMoves(username, amount){
        // Verify that the player's profile exists.
        let data = await this.getPlayerProfile(username);
        if(data == null){return false;}

        // If the data exists, increment their wins by amount.
        try{
            let currentMoves = data.totalMoves;
            let newMoves = currentMoves + amount;

            await PlayerProfile.updateOne({username: username}, {
                totalMoves: newMoves
            });
        }catch(error){
            console.log(error);
        }
        return true;
    }

}

const DB = new Database();
Object.freeze(DB);
module.exports = DB;