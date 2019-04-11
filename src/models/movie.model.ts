import { Request, Response, NextFunction } from 'express'

export class Movie {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            title: { type: String, maxlength: 100 },
            rating: { type: String, maxlength: 100 },
            genre: { type: String, maxlength: 100 },
            year: { type: String, maxlength: 10 },
            duration: { type: Number, maxlength: 100 },
            cover_image_url: { type: String, maxlength: 1000 },
            trailer_url: { type: String, maxlength: 1000 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store users movie model', [
            {
                route: '/get-all-movies',
                method: 'POST',
                callback: this.getAllMovies,
                requireToken: true,
            },
            {
                route: '/get-movie-by-id/:id',
                method: 'POST',
                callback: this.getMovieById,
                requireToken: true,
            }
        ]];
    }

    getAllMovies(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let movieCtrl = model.controller;
            let resp = await movieCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getMovieById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            }
            let movieCtrl = model.controller;
            let resp = await movieCtrl.get(req, null, null);
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