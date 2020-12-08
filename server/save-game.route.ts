import {Request, Response} from 'express';
import {findGameById} from '../src/db-data';


export function saveGame(req: Request, res: Response) {

    const id = req.params["id"],
          changes = req.body;

    console.log("Saving course", id, JSON.stringify(changes));

    const course = findGameById(id);

    course.description = changes.description;

    res.status(200).json(course);

}
