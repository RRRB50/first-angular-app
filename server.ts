import * as express from 'express';
import {Application} from "express";
import {getAllGames} from './server/get-games.route';
import {saveGame} from './server/save-game.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/games').get(getAllGames);

app.route('/api/games/:id').put(saveGame);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address());
});


