import { Request, Response } from 'express';
import { collegeService } from '../service/collegeService';
import { CustomLogger } from '../config/Logger'
let college = new collegeService();

export class collegeController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
college.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
college.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpCreate');
    })}


}