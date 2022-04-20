import * as mongoose from 'mongoose';
import collegeModel from '../models/college';
import { CustomLogger } from '../config/Logger'


export class collegeDao {
    private college = collegeModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpGetAllValues');

    

    
    
    
    this.college.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(collegeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpCreate');

    let temp = new collegeModel(collegeData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}