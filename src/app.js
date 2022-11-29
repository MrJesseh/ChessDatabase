const express = require('express');
const mongoose = require('mongoose');

const DB = require('./Database/Database');

const app = express();
let port = process.env.PORT || 3000;
let isTestMode = false;

// Log into the database.
if(isTestMode){
    let config = require('./private_config.json');
    mongoose.connect(config.DB_Connection_String);
    mongoose.connection.once('open', async () => {
        console.log("\x1b[32m", "[✅] Connected to Database!", '\x1b[0m');
    });
}else{
    mongoose.connect(process.env.DB_Connection_String);
    mongoose.connection.once('open', async () => {
        console.log("\x1b[32m", "[✅] Connected to Database!", '\x1b[0m');
    });
}

// Routes

// GET Requests
require('./routes/getPlayerProfile')(app);

// Post requests
require('./routes/updatePlayerProfile')(app);


// Listen.
app.listen(port);