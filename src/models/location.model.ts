import { Request, Response, NextFunction } from 'express'

export class Location {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String, maxlength: 24 },
            address: { type: String, maxlength: 50 },
            city: { type: String, maxlength: 50 },
            state: { type: String, maxlength: 50 },
            phone: { type: String, maxlength: 24 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store users car model', [
            {
                route: '/get-all-locations',
                method: 'POST',
                callback: this.getAllLocations,
                requireToken: true,
            },
            {
                route: '/get-location-by-id/:id',
                method: 'POST',
                callback: this.getLocationById,
                requireToken: true,
            }
        ]];
    }

    getAllLocations(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let locationCtrl = model.controller;
            let resp = await locationCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getLocationById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            }
            let locationCtrl = model.controller;
            let resp = await locationCtrl.get(req, null, null);
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