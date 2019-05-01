import { Request, Response, NextFunction } from 'express';

export class Concession {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      SNACK_ID: { type: Number, key: 'primary' },
      SNACK_TYPE: { type: String, maxlength: 24 },
      Price: { type: Number, maxlength: 24 },
      THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store Customer Info', [
      {
        route: '/get-all-snack',
        method: 'POST',
        callback: this.getAllSnacks,
        requireToken: true,
      },
      {
        route: '/get-snack-by-id/:SNACK_ID',
        method: 'POST',
        callback: this.getSnackById,
        requireToken: true,
      },
      {
        route: '/create-snack',
        method: 'POST',
        callback: this.createSnack,
        requireToken: true,
      },
      {
        route: '/update-snack/id/:SNACK_ID',
        method: 'PUT',
        callback: this.updateSnack,
        requireToken: true,
      },
      {
        route: '/delete/id/:SNACK_ID',
        method: 'DELETE',
        callback: this.deleteSnack,
        requireToken: true,
      }

    ]
    ];
  }

  getAllSnacks(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let concessionCtrl = model.controller;
      let resp = await concessionCtrl.controller.get(req, null, null);
      res.json({ message: 'Customer information retrieved successfully!', resp });
    }
  }
  getSnackById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let concessionCtrl = model.controller;
      let resp = await concessionCtrl.controller.get(req,null, null);
      res.json({ message: 'Customer ID found succssfully!', resp  });
    }
  }
  createSnack(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let concessionCtrlCtrl = model.controller;
      let resp = await concessionCtrlCtrl.controller.insert(req,null, null);
      res.json({ message: 'Customer created successfully!', resp  });
    }
  }
  updateSnack(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let concessionCtrl = model.controller;
      let resp = await concessionCtrl.controller.update(req,null, null);
      res.json({ message: 'Customer Info updated successfully!', resp  });

    }
  }
  deleteSnack(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let concessionCtrl = model.controller;
      let resp = await concessionCtrl.controller.remove(req,null, null);
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