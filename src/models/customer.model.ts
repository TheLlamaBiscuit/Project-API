import { Request, Response, NextFunction } from 'express';

export class Customer {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      CUST_ID: { type: Number, key: 'primary' },
      First_Name: { type: String, maxlength: 24 },
      Last_Name: { type: String, maxlength: 24 },
      CUST_TYPE: { type: String, maxlength: 24 },
      // Last_Seen: { type: String, maxlength: 24 },
      // THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
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

  getAllCustomers(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let customerCtrl = model.controller;
      let resp = await customerCtrl.controller.get(req, null, null);
      res.json({ message: 'Customer information retrieved successfully!', resp });
    }
  }
  getCustomerById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let customerCtrl = model.controller;
      let resp = await customerCtrl.controller.get(req,null, null);
      res.json({ message: 'Customer ID found succssfully!', resp  });
    }
  }
  createCustomer(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let customerCtrl = model.controller;
      let resp = await customerCtrl.controller.insert(req,null, null);
      res.json({ message: 'Customer created successfully!', resp  });
    }
  }
  updateCustomer(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let customerCtrl = model.controller;
      let resp = await customerCtrl.controller.update(req,null, null);
      res.json({ message: 'Customer Info updated successfully!', resp  });

    }
  }
  deleteCustomer(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let customerCtrl = model.controller;
      let resp = await customerCtrl.controller.remove(req,null, null);
      res.json({ message: 'Customer deleted successfully!', resp  });

    }
  }




  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}