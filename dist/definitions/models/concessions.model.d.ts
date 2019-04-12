import { Request, Response, NextFunction } from 'express';
export declare class Concessions {
    _model: any;
    constructor(norm: any);
    getAllConcessions(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getConcessionById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
