import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class collegeController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/college', this.GpGetAllValues);
this.router.post('/college', this.GpCreate);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.COLLEGEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpCreate');
        new ApiAdapter().post(Constant.COLLEGEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

