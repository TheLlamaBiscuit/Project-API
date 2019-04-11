import { Request, Response, NextFunction } from 'express';
export declare class Location {
    _model: any;
    constructor(norm: any);
    getAllLocations(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getLocationById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
