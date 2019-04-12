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
class Concessions {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                price: { type: String, maxlength: 50 },
                description: { type: String, maxlength: 200 },
                image_url: { type: String, maxlength: 1000 },
                location_name: {
                    type: String,
                    key: 'foreign',
                    references: { table: './location.model.ts', foreignKey: 'name' },
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
    getAllConcessions(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getConcessionById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.get(req, null, null);
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
exports.Concessions = Concessions;
