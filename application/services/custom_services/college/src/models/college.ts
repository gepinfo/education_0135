
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const collegeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   College_Name: String,
   College_Address: String
})

const collegeModel = mongoose.model('college', collegeSchema, 'college');
export default collegeModel;
