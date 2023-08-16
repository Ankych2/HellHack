const mongoose=require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Here we can create separate schema for each collection

const employee = new Schema({
    dId: ObjectId,
    first_name: String,
    last_name: String,
    email: Date
});
const employeeModel = mongoose.model('employee', employee);

const department = new Schema({
      name: String

});
const departmentModel = mongoose.model('department', department);
module.exports={employeeModel,departmentModel}