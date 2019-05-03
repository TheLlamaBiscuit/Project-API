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
class Concession {
    constructor(norm) {
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
    getAllConcessions(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Concession information retrieved successfully!', resp });
        });
    }
    getConcessionById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Concession ID found succssfully!', resp });
        });
    }
    createConcession(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.insert(req, null, null);
            res.json({ message: 'Concession created successfully!', resp });
        });
    }
    updateConcession(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.update(req, null, null);
            res.json({ message: 'Concession Info updated successfully!', resp });
        });
    }
    deleteConcession(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.remove(req, null, null);
            res.json({ message: 'Concession deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Concession = Concession;
