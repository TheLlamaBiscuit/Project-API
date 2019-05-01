import { Request, Response, NextFunction } from 'express';

export class Employee {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      EMP_ID: { type: Number, key: 'primary' },
      First_Name: { type: String, maxlength: 24 },
      Last_Name: { type: String, maxlength: 24 },
      EMP_TYPE: { type: String, maxlength: 24 },
      // THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
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
        route: '/get-employee-by-id/:EMP_ID',
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
        route: '/update-Employee/id/:EMP_ID',
        method: 'PUT',
        callback: this.updateEmployee,
        requireToken: true,
      },
      {
        route: '/delete/id/:EMP_ID',
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