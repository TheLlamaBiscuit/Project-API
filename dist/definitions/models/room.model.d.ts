import { Request, Response, NextFunction } from 'express';
export declare class room {
    _model: any;
    constructor(norm: any);
    getAllRooms(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRoomById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createRoom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateRoom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteRoom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
