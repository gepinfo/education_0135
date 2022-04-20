import { Request, Response } from 'express';
import {collegeDao} from '../dao/collegeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let college = new collegeDao();

export class collegeService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpGetAllValues')
     
     college.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpCreate')
     let  collegeData = req.body;
     college.GpCreate(collegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}