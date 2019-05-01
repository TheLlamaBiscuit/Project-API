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
class Film {
    constructor(norm) {
        this.model = [{
                FILM_ID: { type: Number, key: 'primary' },
                Genre: { type: String, maxlength: 24 },
                Length: { type: Number },
                Title: { type: String, maxlength: 24 },
                Rating: { type: String, maxlength: 24 },
                Publishing_Company: { type: String, maxlength: 24 },
                Poster_URL: { type: String, maxlength: 1000 },
                Trailer_URL: { type: String, maxlength: 1000 },
                // THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
                // ROOM_ID: { type: Number, key: 'foreign', references: { table: 'room', foreignKey: 'ROOM_ID' } },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Film Info', [
                {
                    route: '/get-all-film',
                    method: 'POST',
                    callback: this.getAllFilms,
                    requireToken: true,
                },
                {
                    route: '/get-film-by-id/:FILM_ID',
                    method: 'POST',
                    callback: this.getFilmById,
                    requireToken: true,
                },
                {
                    route: '/create-film',
                    method: 'POST',
                    callback: this.createFilm,
                    requireToken: true,
                },
                {
                    route: '/update-film/id/:FILM_ID',
                    method: 'PUT',
                    callback: this.updateFilm,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:FILM_ID',
                    method: 'DELETE',
                    callback: this.deleteFilm,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllFilms(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let filmCtrl = model.controller;
            let resp = yield filmCtrl.controller.get(req, null, null);
            res.json({ message: 'Film information retrieved successfully!', resp });
        });
    }
    getFilmById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let filmCtrl = model.controller;
            let resp = yield filmCtrl.controller.get(req, null, null);
            res.json({ message: 'Film ID found succssfully!', resp });
        });
    }
    createFilm(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let filmCtrl = model.controller;
            let resp = yield filmCtrl.controller.insert(req, null, null);
            res.json({ message: 'Film created successfully!', resp });
        });
    }
    updateFilm(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let filmCtrl = model.controller;
            let resp = yield filmCtrl.controller.update(req, null, null);
            res.json({ message: 'Film Info updated successfully!', resp });
        });
    }
    deleteFilm(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let filmCtrl = model.controller;
            let resp = yield filmCtrl.controller.remove(req, null, null);
            res.json({ message: 'Film deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Film = Film;
