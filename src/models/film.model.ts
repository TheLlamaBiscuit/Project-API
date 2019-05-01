import { Request, Response, NextFunction } from 'express';

export class Film {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      FILM_ID: { type: Number, key: 'primary' },
      Genre: { type: String, maxlength: 24 },
      Length: { type: Number },
      Title: { type: String, maxlength: 24 },
      Rating: { type: String, maxlength: 24 },
      Publishing_Company: { type: String, maxlength: 24 },
      Poster_URL: { type: String, maxlength: 1000 },
      Trailer_URL: { type: String, maxlength: 1000 },
      THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
      ROOM_ID: { type: Number, key: 'foreign', references: { table: 'room', foreignKey: 'ROOM_ID' } },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store Film Info', [
      {
        route: '/get-all-film',
        method: 'POST',
        callback: this.getAllFilms,
        requireToken: true,
      },
      {
        route: '/get-film-by-id/:FILM_ID',
        method: 'POST',
        callback: this.getFilmById,
        requireToken: true,
      },
      {
        route: '/create-film',
        method: 'POST',
        callback: this.createFilm,
        requireToken: true,
      },
      {
        route: '/update-film/id/:FILM_ID',
        method: 'PUT',
        callback: this.updateFilm,
        requireToken: true,
      },
      {
        route: '/delete/id/:FILM_ID',
        method: 'DELETE',
        callback: this.deleteFilm,
        requireToken: true,
      }

    ]
    ];
  }

  getAllFilms(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let filmCtrl = model.controller;
      let resp = await filmCtrl.controller.get(req, null, null);
      res.json({ message: 'Film information retrieved successfully!', resp });
    }
  }
  getFilmById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let filmCtrl = model.controller;
      let resp = await filmCtrl.controller.get(req,null, null);
      res.json({ message: 'Film ID found succssfully!', resp  });
    }
  }
  createFilm(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let filmCtrl = model.controller;
      let resp = await filmCtrl.controller.insert(req,null, null);
      res.json({ message: 'Film created successfully!', resp  });
    }
  }
  updateFilm(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let filmCtrl = model.controller;
      let resp = await filmCtrl.controller.update(req,null, null);
      res.json({ message: 'Film Info updated successfully!', resp  });

    }
  }
  deleteFilm(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let filmCtrl = model.controller;
      let resp = await filmCtrl.controller.remove(req,null, null);
      res.json({ message: 'Film deleted successfully!', resp  });

    }
  }




  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}