import { Request, Response, NextFunction } from 'express';

export class Movie {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      genre: { type: String, maxlength: 24 },
      length: { type: Number },
      title: { type: String, maxlength: 24 },
      rating: { type: String, maxlength: 24 },
      publisher: { type: String, maxlength: 24 },
      poster_URL: { type: String, maxlength: 1000 },
      // THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
      // ROOM_ID: { type: Number, key: 'foreign', references: { table: 'room', foreignKey: 'ROOM_ID' } },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store Movie Info', [
      {
        route: '/get-all-movie',
        method: 'POST',
        callback: this.getAllMovies,
        requireToken: true,
      },
      {
        route: '/get-movie-by-id/:id',
        method: 'POST',
        callback: this.getMovieById,
        requireToken: true,
      },
      {
        route: '/create-movie',
        method: 'POST',
        callback: this.createMovie,
        requireToken: true,
      },
      {
        route: '/update-movie/id/:id',
        method: 'PUT',
        callback: this.updateMovie,
        requireToken: true,
      },
      {
        route: '/delete/id/:id',
        method: 'DELETE',
        callback: this.deleteMovie,
        requireToken: true,
      }

    ]
    ];
  }

  getAllMovies(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"]
      }
      let movieCtrl = model.controller;
      let resp = await movieCtrl.controller.get(req, null, null);
      res.json({ message: 'Movie information retrieved successfully!', resp });
    }
  }
  getMovieById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body= {
          get: ["*"],
          where: {
            id: req.params.id
          }
        }
      let movieCtrl = model.controller;
      let resp = await movieCtrl.controller.get(req,null, null);
      res.json({ message: 'Movie ID found succssfully!', resp  });
    }
  }
  createMovie(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let movieCtrl = model.controller;
      let resp = await movieCtrl.controller.insert(req,null, null);
      res.json({ message: 'Movie created successfully!', resp  });
    }
  }
  updateMovie(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let movieCtrl = model.controller;
      let resp = await movieCtrl.controller.update(req,null, null);
      res.json({ message: 'Movie Info updated successfully!', resp  });

    }
  }
  deleteMovie(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let movieCtrl = model.controller;
      let resp = await movieCtrl.controller.remove(req,null, null);
      res.json({ message: 'Movie deleted successfully!', resp  });

    }
  }




  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}