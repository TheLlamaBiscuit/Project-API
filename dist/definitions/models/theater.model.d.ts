import { Request, Response, NextFunction } from 'express';
export declare class Theater {
    private norm;
    _model: any;
    constructor(norm: any);
    model: any;
    testFunc: (model: any) => (req: Request, res: Response, next: NextFunction) => void;
}
