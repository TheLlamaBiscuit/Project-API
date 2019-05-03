import { Request, Response, NextFunction } from 'express';

export class Employee {
  _model: any;
  constructor(norm: any) {
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

  getAllEmployees(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let employeeCtrl = model.controller;
      let resp = await employeeCtrl.controller.get(req, null, null);
      res.json({ message: 'Employee information retrieved successfully!', resp });
    }
  }
  getEmployeeById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let employeeCtrl = model.controller;
      let resp = await employeeCtrl.controller.get(req,null, null);
      res.json({ message: 'Employee ID found succssfully!', resp  });
    }
  }
  createEmployee(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let employeeCtrl = model.controller;
      let resp = await employeeCtrl.controller.insert(req,null, null);
      res.json({ message: 'Customer created successfully!', resp  });
    }
  }
  updateEmployee(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let employeeCtrl = model.controller;
      let resp = await employeeCtrl.controller.update(req,null, null);
      res.json({ message: 'Employee Info updated successfully!', resp  });

    }
  }
  deleteEmployee(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let employeeCtrl = model.controller;
      let resp = await employeeCtrl.controller.remove(req,null, null);
      res.json({ message: 'Employee deleted successfully!', resp  });

    }
  }




  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}