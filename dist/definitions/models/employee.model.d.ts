import { Request, Response, NextFunction } from 'express';
export declare class Employee {
    _model: any;
    constructor(norm: any);
    getAllEmployees(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getEmployeeById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createEmployee(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateEmployee(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteEmployee(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
