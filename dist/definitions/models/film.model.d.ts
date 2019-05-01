import { Request, Response, NextFunction } from 'express';
export declare class Film {
    _model: any;
    constructor(norm: any);
    getAllFilms(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getFilmById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createFilm(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateFilm(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteFilm(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
