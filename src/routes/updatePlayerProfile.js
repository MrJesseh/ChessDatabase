const DB = require('../Database/Database');
const express = require('express');

module.exports = function(app){
    app.post('/players/:username', express.json({type: '*/*'}), async function(req, res) {
        // Handle params
        let params = await req.params;
        let body = await req.body;
        let username = params.username;

        // Determine command type.
        let command = body.command;
        if(command == 'incrementWins'){
            let amount = body.amount;
            let data = await DB.incrementPlayerWins(username, amount);
            return res.send(data);
        }else if(command == 'incrementLosses'){
            let amount = body.amount;
            let data = await DB.incrementPlayerLosses(username, amount);
            return res.send(data);
        }else if(command == 'incrementMoves'){
            let amount = body.amount;
            let data = await DB.incrementPlayerMoves(username, amount);
            return res.send(data);
        }else if(command == 'incrementGames'){
            let amount = body.amount;
            let data = await DB.incrementPlayerGamesPlayed(username, amount);
            return res.send(data);
        }else if(command == 'resetPlayerData'){
            let data = await DB.resetPlayerProfile(username);
            return res.send(data);
        }else if(command == 'createPlayerProfile'){
            let data = await DB.createPlayerProfile(username);
            return res.send(data);
        }
    });
}