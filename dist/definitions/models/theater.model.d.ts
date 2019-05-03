import { Request, Response, NextFunction } from 'express';
export declare class Theater {
    _model: any;
    constructor(norm: any);
    getAllTheaters(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTheaterById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createTheater(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateTheater(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTheater(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
