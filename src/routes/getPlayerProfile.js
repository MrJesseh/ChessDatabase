const DB = require('../Database/Database');

module.exports = function(app){
    app.get('/players/:username', async function(req, res) {
        // Handle params
        let params = await req.params;
        let username = params.username;

        // Search for the data.
        let data = await DB.getPlayerProfile(username);
        if(data == null){return res.send({error: "This user does not have data."});}

        // Otherwise, send the data.
        return res.json(data);
    });
}