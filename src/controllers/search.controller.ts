import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/create-menu-object';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    
    let list = Pet.getFromName(query)
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}

export const searchWithNameOrType = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    
    let list = Pet.getFromNameOrType(query)
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}