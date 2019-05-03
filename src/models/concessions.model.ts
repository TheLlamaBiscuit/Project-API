import { Request, Response, NextFunction } from 'express';

export class Concession {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String, maxlength: 24 },
            description: { type: String, maxlength: 1000 },
            price: { type: String, maxlength: 24 },
            concession_type: { type: String, maxlength: 24 },
            snack_URL: { type: String, maxlength: 1000 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store Concession Info', [
            {
                route: '/get-all-concession',
                method: 'POST',
                callback: this.getAllConcessions,
                requireToken: true,
            },
            {
                route: '/get-concession-by-id/:id',
                method: 'POST',
                callback: this.getConcessionById,
                requireToken: true,
            },
            {
                route: '/create-concession',
                method: 'POST',
                callback: this.createConcession,
                requireToken: true,
            },
            {
                route: '/update-Concession/id/:id',
                method: 'PUT',
                callback: this.updateConcession,
                requireToken: true,
            },
            {
                route: '/delete/id/:id',
                method: 'DELETE',
                callback: this.deleteConcession,
                requireToken: true,
            }

        ]
        ];
    }

    getAllConcessions(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Concession information retrieved successfully!', resp });
        }
    }
    getConcessionById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            }
            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Concession ID found succssfully!', resp });
        }
    }
    createConcession(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.controller.insert(req, null, null);
            res.json({ message: 'Concession created successfully!', resp });
        }
    }
    updateConcession(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.controller.update(req, null, null);
            res.json({ message: 'Concession Info updated successfully!', resp });

        }
    }
    deleteConcession(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.controller.remove(req, null, null);
            res.json({ message: 'Concession deleted successfully!', resp });

        }
    }
    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}