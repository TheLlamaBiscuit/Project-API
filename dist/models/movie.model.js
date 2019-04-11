"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(norm) {
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
    getAllMovies(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getMovieById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            };
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Movie = Movie;
