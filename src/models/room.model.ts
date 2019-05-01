import { Request, Response, NextFunction } from 'express';

export class room {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      ROOM_ID: { type: Number, key: 'primary' },
      Room_Number: { type: String, maxlength: 24 },
      Room_Type: { type: String, maxlength: 24 },
      THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
      FILM_ID: { type: Number, key: 'foreign', references: { table: 'film', foreignKey: 'FILM_ID' } },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store Room Info', [
      {
        route: '/get-all-room',
        method: 'POST',
        callback: this.getAllRooms,
        requireToken: true,
      },
      {
        route: '/get-room-by-id/:ROOM_ID',
        method: 'POST',
        callback: this.getRoomById,
        requireToken: true,
      },
      {
        route: '/create-room',
        method: 'POST',
        callback: this.createRoom,
        requireToken: true,
      },
      {
        route: '/update-Room/id/:ROOM_ID',
        method: 'PUT',
        callback: this.updateRoom,
        requireToken: true,
      },
      {
        route: '/delete/id/:ROOM_ID',
        method: 'DELETE',
        callback: this.deleteRoom,
        requireToken: true,
      }

    ]
    ];
  }

  getAllRooms(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let roomCtrl = model.controller;
      let resp = await roomCtrl.controller.get(req, null, null);
      res.json({ message: 'Room information retrieved successfully!', resp });
    }
  }
  getRoomById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let roomCtrl = model.controller;
      let resp = await roomCtrl.controller.get(req,null, null);
      res.json({ message: 'Room ID found succssfully!', resp  });
    }
  }
  createRoom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let roomCtrl = model.controller;
      let resp = await roomCtrl.controller.insert(req,null, null);
      res.json({ message: 'Room created successfully!', resp  });
    }
  }
  updateRoom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let roomCtrl = model.controller;
      let resp = await roomCtrl.controller.update(req,null, null);
      res.json({ message: 'Room Info updated successfully!', resp  });

    }
  }
  deleteRoom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let roomCtrl = model.controller;
      let resp = await roomCtrl.controller.remove(req,null, null);
      res.json({ message: 'Room deleted successfully!', resp  });

    }
  }




  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}