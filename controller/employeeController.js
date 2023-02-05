const { response } = require("express");
let empCollection = require("../config/dbConfig");
//for  find allproducts
exports.getAllEmployees = async (request,response)=> {
    try{
    let result =await empCollection.getCollection().find().toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}

// find product bases on productid
exports.findEmployeeById = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
        let result =await empCollection.getCollection().findOne({_id:empId});
        if(result==null){
            response.json({"msg":"Record not present with id as "+empId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}
//5.	create rest api in existing project to finde employee details whose salary is betweeen 20000 to 30000.
exports.findEmployeeByDeptid = async (request,response)=>{
   //let empId = eval(request.params._id);
    let departId = eval(request.params.deptid);
    try{
    
       let result =await empCollection.getCollection().find({$and:[{salary:{$gt:20000}},{salary:{$lt:30000}}]}).toArray();
 
       if(result==null){
            response.json({"msg":"Record not present with id as "+departId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}

//
//4.	Create rest api in existing project to find employee details whose age is > 21
exports.findEmployeeByAge = async (request,response)=>{
    let empId = eval(request.params._id);
     //let departId = eval(request.params.deptid);
     try{
     
        let result =await empCollection.getCollection().find({age:{$gt:21}}).toArray();
  
        if(result==null){
             response.json({"msg":"Record not present with id as "+empId})
         }else {
             response.json(result);
         }
         }catch(ex){
             response.json({"msg":"Error generated "+ex});
         }
 }

 //
 exports.storeEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().insertOne(emp);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}
//
exports.deleteEmployee = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
    let result  = await empCollection.getCollection().deleteOne({_id:empId});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+empId);
    }
    }catch(ex){
        response.send(ex);
    }
}
//
exports.updateEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{salary:emp.salary}});
    if(result.modifiedCount>0){
        response.send("Salary updated successfully")
    }else if(result.matchedCount>0){
        response.send("salary didn't update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}
//updateage
exports.updateEmployeeAge= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{age:emp.age}});
    if(result.modifiedCount>0){
        response.send("age updated successfully")
    }else if(result.matchedCount>0){
        response.send("age didn't update becuase old and new age are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}
//delete records based on age.
exports.deleteEmployeeAge = async (request,response)=> {
    let empage = eval(request.params.age);
    //console.log(empage);
    try{
    let result  = await empCollection.getCollection().deleteMany({age:{$lt:empage}});
    //response.send(result);
    console.log(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with age as ");
    }
    }catch(ex){
        response.send(ex);
    }
}
//
