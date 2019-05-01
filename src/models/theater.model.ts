import { Request, Response, NextFunction } from 'express';

export class Theater {
    _model: any;
    constructor(private norm: any) {
        this.model = [{
            THEATER_ID: { type: Number, key: 'primary' },
            Location: { type: String, maxlength: 24 },
            THEATER_TYPE: { type: String, maxlength: 24 },
            Number_of_Rooms: { type: Number },
            Number_of_Employees: { type: Number }
        }, 'test model', [{
            route: '/getTest',
            method: 'POST',
            callback: this.testFunc,
            requireToken: true,
        }]];
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    testFunc = (model: any) => {
        return (req: Request, res: Response, next: NextFunction) => {
            let payload = {
                body: {
                    get: ["*"]
                }
            }
            let testModel = model.model.controller;
            console.log('testModel', model.model.controller);
            //let resp = testModel.controller.get(req, null, null);
            // console.log('from test model resp: ', resp);
            res.json({ message: 'works...' });
        }
    }

}