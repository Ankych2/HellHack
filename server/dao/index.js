const Model=require('../models/employee')
const createEmployee=async (employeeObj)=>{
       return await Model.employeeModel.create(employeeObj);
}


const getEmployee=async (query)=>{
     return await   Model.employeeModel.find(query);
}

const getDepartment=async (query)=>{
    return await   Model.departmentModel.findOne(query);
}


module.exports={createEmployee,getEmployee,getDepartment}