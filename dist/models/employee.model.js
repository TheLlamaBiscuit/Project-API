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
class Employee {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                first_name: { type: String, maxlength: 24 },
                last_name: { type: String, maxlength: 24 },
                emp_type: { type: String, maxlength: 24 },
                emp_URL: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Employee Info', [
                {
                    route: '/get-all-employee',
                    method: 'POST',
                    callback: this.getAllEmployees,
                    requireToken: true,
                },
                {
                    route: '/get-employee-by-id/:id',
                    method: 'POST',
                    callback: this.getEmployeeById,
                    requireToken: true,
                },
                {
                    route: '/create-employee',
                    method: 'POST',
                    callback: this.createEmployee,
                    requireToken: true,
                },
                {
                    route: '/update-Employee/id/:id',
                    method: 'PUT',
                    callback: this.updateEmployee,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteEmployee,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllEmployees(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let employeeCtrl = model.controller;
            let resp = yield employeeCtrl.controller.get(req, null, null);
            res.json({ message: 'Employee information retrieved successfully!', resp });
        });
    }
    getEmployeeById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let employeeCtrl = model.controller;
            let resp = yield employeeCtrl.controller.get(req, null, null);
            res.json({ message: 'Employee ID found succssfully!', resp });
        });
    }
    createEmployee(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let employeeCtrl = model.controller;
            let resp = yield employeeCtrl.controller.insert(req, null, null);
            res.json({ message: 'Customer created successfully!', resp });
        });
    }
    updateEmployee(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let employeeCtrl = model.controller;
            let resp = yield employeeCtrl.controller.update(req, null, null);
            res.json({ message: 'Employee Info updated successfully!', resp });
        });
    }
    deleteEmployee(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let employeeCtrl = model.controller;
            let resp = yield employeeCtrl.controller.remove(req, null, null);
            res.json({ message: 'Employee deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Employee = Employee;
