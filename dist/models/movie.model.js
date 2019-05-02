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
                genre: { type: String, maxlength: 24 },
                length: { type: Number },
                title: { type: String, maxlength: 24 },
                rating: { type: String, maxlength: 24 },
                publisher: { type: String, maxlength: 24 },
                poster_URL: { type: String, maxlength: 1000 },
                // THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
                // ROOM_ID: { type: Number, key: 'foreign', references: { table: 'room', foreignKey: 'ROOM_ID' } },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Movie Info', [
                {
                    route: '/get-all-movie',
                    method: 'POST',
                    callback: this.getAllMovies,
                    requireToken: true,
                },
                {
                    route: '/get-movie-by-id/:id',
                    method: 'POST',
                    callback: this.getMovieById,
                    requireToken: true,
                },
                {
                    route: '/create-movie',
                    method: 'POST',
                    callback: this.createMovie,
                    requireToken: true,
                },
                {
                    route: '/update-movie/id/:id',
                    method: 'PUT',
                    callback: this.updateMovie,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteMovie,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllMovies(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.controller.get(req, null, null);
            res.json({ message: 'Movie information retrieved successfully!', resp });
        });
    }
    getMovieById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.controller.get(req, null, null);
            res.json({ message: 'Movie ID found succssfully!', resp });
        });
    }
    createMovie(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.controller.insert(req, null, null);
            res.json({ message: 'Movie created successfully!', resp });
        });
    }
    updateMovie(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.controller.update(req, null, null);
            res.json({ message: 'Movie Info updated successfully!', resp });
        });
    }
    deleteMovie(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let movieCtrl = model.controller;
            let resp = yield movieCtrl.controller.remove(req, null, null);
            res.json({ message: 'Movie deleted successfully!', resp });
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
