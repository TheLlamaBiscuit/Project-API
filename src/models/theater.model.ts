import {Request, Response, NextFunction} from 'express';

export class theater {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      THEATER_ID: { type: Number, key: 'primary' },
      Location: { type: String, maxlength: 24 },
      THEATER_TYPE: { type: String, maxlength: 24 },
      Number_of_Rooms: { type: String, maxlength: 24 },
      Number_of_Employees: { type: String, maxlength: 24 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store Theater Info', [
      {
        route: '/get-all-theaters',
        method: 'POST',
        callback: this.getAllTheaters,
        requireToken: true,
      },
      {
        route: '/get-theater-by-id/:THEATER_ID',
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
        route: '/update-theater/id/:THEATER_ID',
        method: 'PUT',
        callback: this.updateTheater,
        requireToken: true,
      },
      {
        route: '/delete/id/:THEATER_ID',
        method: 'DELETE',
        callback: this.deleteTheater,
        requireToken: true,
      }

    ]
    ];
  }

  getAllTheaters(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"]
        }
      let theaterCtrl = model.controller;
      let resp = await theaterCtrl.controller.get(req,null, null);
      res.json({ message: 'Car information retrieved successfully!', resp  });
    }
  }
  getTheaterById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let theaterCtrl = model.controller;
      let resp = await theaterCtrl.controller.get(req,null, null);
      res.json({ message: 'Theater ID found succssfully!', resp  });
    }
  }
  createTheater(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      
      let theaterCtrl = model.controller;
      let resp = await theaterCtrl.controller.insert(req,null, null);
      res.json({ message: 'Theater created successfully!', resp  });
    }
  }
  updateTheater(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
       
      let theaterCtrl = model.controller;
      let resp = await theaterCtrl.controller.update(req,null, null);
      res.json({ message: 'Theater Info updated successfully!', resp  });
      
    }
  }
  deleteTheater(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
     
      let theaterCtrl = model.controller;
      let resp = await theaterCtrl.controller.remove(req,null, null);
      res.json({ message: 'Theater deleted successfully!', resp  });
     
    }
  }
  
  


  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}