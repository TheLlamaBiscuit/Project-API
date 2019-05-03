import { Request, Response, NextFunction } from 'express';

export class Theater {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String, maxlength: 50 },
            location: { type: String, maxlength: 24 },
            theater_type: { type: String, maxlength: 24 },
            number_of_rooms: { type: Number },
            number_of_employees: { type: Number },
            theater_URL: { type: String, maxlength: 1000 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store Theater Info', [
            {
                route: '/get-all-theater',
                method: 'POST',
                callback: this.getAllTheaters,
                requireToken: true,
            },
            {
                route: '/get-theater-by-id/:id',
                method: 'POST',
                callback: this.getTheaterById,
                requireToken: true,
            },
            {
                route: '/create-theater',
                method: 'POST',
                callback: this.createTheater,
                requireToken: true,
            },
            {
                route: '/update-theater/id/:id',
                method: 'PUT',
                callback: this.updateTheater,
                requireToken: true,
            },
            {
                route: '/delete/id/:id',
                method: 'DELETE',
                callback: this.deleteTheater,
                requireToken: true,
            }

        ]
        ];
    }

    getAllTheaters(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let theaterCtrl = model.controller;
            let resp = await theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Theater information retrieved successfully!', resp });
        }
    }
    getTheaterById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            }
            let theaterCtrl = model.controller;
            let resp = await theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Theater ID found succssfully!', resp });
        }
    }
    createTheater(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let theaterCtrl = model.controller;
            let resp = await theaterCtrl.controller.insert(req, null, null);
            res.json({ message: 'Theater created successfully!', resp });
        }
    }
    updateTheater(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let theaterCtrl = model.controller;
            let resp = await theaterCtrl.controller.update(req, null, null);
            res.json({ message: 'Theater Info updated successfully!', resp });

        }
    }
    deleteTheater(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {

            let theaterCtrl = model.controller;
            let resp = await theaterCtrl.controller.remove(req, null, null);
            res.json({ message: 'Theater deleted successfully!', resp });

        }
    }




    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}