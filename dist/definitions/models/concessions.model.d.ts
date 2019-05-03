import { Request, Response, NextFunction } from 'express';
export declare class Concession {
    _model: any;
    constructor(norm: any);
    getAllConcessions(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getConcessionById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createConcession(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateConcession(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteConcession(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
