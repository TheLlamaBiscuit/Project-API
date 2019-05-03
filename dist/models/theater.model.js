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
class Theater {
    constructor(norm) {
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
    getAllTheaters(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Theater information retrieved successfully!', resp });
        });
    }
    getTheaterById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Theater ID found succssfully!', resp });
        });
    }
    createTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.insert(req, null, null);
            res.json({ message: 'Theater created successfully!', resp });
        });
    }
    updateTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.update(req, null, null);
            res.json({ message: 'Theater Info updated successfully!', resp });
        });
    }
    deleteTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.remove(req, null, null);
            res.json({ message: 'Theater deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Theater = Theater;
