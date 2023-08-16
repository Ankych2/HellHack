const dao=require('../dao/index')


/**Controller to handle create request for employee*/
const createEmployee=async (req,res)=>{
    try{
        let employeeObj=req.body
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



        //Here we can use error object Array to check error, with predefined error and messages
        if(!employeeObj["first_name"]){
            return res.status(200).json({message:"First Name id required"});
        }else
        if(!mailformat.test(employeeObj["email"])){
           return  res.status(200).json({message:"not valid email"});
        }
                let department=dao.getDepartment({dId:employeeObj["dId"]})
                if(!department){
                    return  res.status(200).json({message:"department not exist"});
                }

         await dao.createEmployee(employeeObj)
         return  res.status(200).json({message:"employee created sucessfully"});

    }catch (e) {
console.log(e)
        return  res.status(500).json({message:"Internal server error"});
    }
}

/**Controller to handle get request for employee*/

const getEmployee=async (req,res)=>{
    try{

        let queryParams=req.query


    let findQuery={}
        //In case of string we can use regex to match string as partial, ignore upper/lower cases etc
    if(req.query["first_name"]){
        findQuery["first_name"]=req.query["first_name"]
    }
            if(req.query["last_name"]){
                findQuery["last_name"]=req.query["last_name"]
            }

            if(req.query["email"]){
                findQuery["email"]=req.query["email"]
            }
            if(req.query["did"]){
                findQuery["did"]=req.query["did"]
            }
       let data=  await dao.getEmployee(findQuery)

        return  res.status(200).json(data);
    }catch (e) {
console.log(e)
        return  res.status(500).json({message:"Internal server error"});

    }
}


module.exports={createEmployee,getEmployee}