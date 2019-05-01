import { Request, Response, NextFunction } from 'express';
export declare class Customer {
    _model: any;
    constructor(norm: any);
    getAllCustomers(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCustomerById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCustomer(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCustomer(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCustomer(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
