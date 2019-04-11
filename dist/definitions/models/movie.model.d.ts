import { Request, Response, NextFunction } from 'express';
export declare class Movie {
    _model: any;
    constructor(norm: any);
    getAllMovies(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMovieById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
