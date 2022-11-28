const mongoose = require('mongoose');
const Stats = mongoose.connection.useDb("PlayerStats");


const PlayerProfile = mongoose.Schema({
    username: String,
    gamesPlayed: Number,
    wins: Number,
    losses: Number,
    totalMoves: Number
});

const PlayerProfileModel = Stats.model('PlayerProfile', PlayerProfile, "Player_Stats");

module.exports = PlayerProfileModel;