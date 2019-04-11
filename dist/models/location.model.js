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
class Location {
    constructor(norm) {
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
    getAllLocations(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let locationCtrl = model.controller;
            let resp = yield locationCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getLocationById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                were: {
                    id: req.params.id
                }
            };
            let locationCtrl = model.controller;
            let resp = yield locationCtrl.get(req, null, null);
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
exports.Location = Location;
