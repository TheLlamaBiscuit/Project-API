import { Request, Response, NextFunction } from 'express'

export class Concessions {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String, maxlength: 24 },
            price: { type: String, maxlength: 50 },
            description: { type: String, maxlength: 200 },
            image_url: { type: String, maxlength: 1000 },
            location_name: {
                type: String,
                key: 'foreign',
                references: { table: 'table', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store users concession model', [
            {
                route: '/get-all-concessions',
                method: 'POST',
                callback: this.getAllConcessions,
                requireToken: true,
            },
            {
                route: '/get-concession-by-id/:id',
                method: 'POST',
                callback: this.getConcessionById,
                requireToken: true,
            }
        ]];
    }

    getAllConcessions(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getConcessionById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            }
            let concessionCtrl = model.controller;
            let resp = await concessionCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}