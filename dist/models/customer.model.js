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
class Customer {
    constructor(norm) {
        this.model = [{
                CUST_ID: { type: Number, key: 'primary' },
                First_Name: { type: String, maxlength: 24 },
                Last_Name: { type: String, maxlength: 24 },
                CUST_TYPE: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Customer Info', [
                {
                    route: '/get-all-customer',
                    method: 'POST',
                    callback: this.getAllCustomers,
                    requireToken: true,
                },
                {
                    route: '/get-customer-by-id/:CUST_ID',
                    method: 'POST',
                    callback: this.getCustomerById,
                    requireToken: true,
                },
                {
                    route: '/create-customer',
                    method: 'POST',
                    callback: this.createCustomer,
                    requireToken: true,
                },
                {
                    route: '/update-customer/id/:CUST_ID',
                    method: 'PUT',
                    callback: this.updateCustomer,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:CUST_ID',
                    method: 'DELETE',
                    callback: this.deleteCustomer,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllCustomers(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let customerCtrl = model.controller;
            let resp = yield customerCtrl.controller.get(req, null, null);
            res.json({ message: 'Customer information retrieved successfully!', resp });
        });
    }
    getCustomerById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let customerCtrl = model.controller;
            let resp = yield customerCtrl.controller.get(req, null, null);
            res.json({ message: 'Customer ID found succssfully!', resp });
        });
    }
    createCustomer(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let customerCtrl = model.controller;
            let resp = yield customerCtrl.controller.insert(req, null, null);
            res.json({ message: 'Customer created successfully!', resp });
        });
    }
    updateCustomer(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let customerCtrl = model.controller;
            let resp = yield customerCtrl.controller.update(req, null, null);
            res.json({ message: 'Customer Info updated successfully!', resp });
        });
    }
    deleteCustomer(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let customerCtrl = model.controller;
            let resp = yield customerCtrl.controller.remove(req, null, null);
            res.json({ message: 'Customer deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Customer = Customer;
