import {Request, Response} from 'express';
import {GAMES} from '../src/db-data';


export function getAllGames(req: Request, res: Response) {


    res.status(200).json(Object.values(GAMES));


}


export function getCourseById(req: Request, res: Response) {

    const gameId = req.params['id'];

    const games: any = Object.values(GAMES);

    const game = games.find(game => game.id == gameId);

    res.status(200).json(game);
}
