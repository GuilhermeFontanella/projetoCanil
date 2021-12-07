import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('Página Principal')
}

export const dogs = (req: Request, res: Response) => {
    res.send('Página Dogs')
}

export const cats = (req: Request, res: Response) => {
    res.send('Página Cats')
}

export const fishes = (req: Request, res: Response) => {
    res.send('Página Fishes')
}