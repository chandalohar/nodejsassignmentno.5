let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employeeController")

// http://localhost:3000/api/employees/getEmployee 
//use 4000 portno. instead of3000.

router.get("/getEmployee",employeeController.getAllEmployees);

module.exports=router;

// http://localhost:3000/api/employees/findEmployeeById/1
// http://localhost:3000/api/employees/findEmployeeById/7

router.get("/findEmployeeById/:_id",employeeController.findEmployeeById);


// http://localhost:3000/api/employees/findEmployeeBydeptid/101

router.get("/findEmployeeBydeptid/:deptid",employeeController.findEmployeeByDeptid);

router.get("/findEmployeeByAge/",employeeController.findEmployeeByAge);

// http://localhost:3000/api/employees/storeEmployee 
router.post("/storeEmployee",employeeController.storeEmployee);

// http://localhost:3000/api/employees/deleteEmployeeById/1 
router.delete("/deleteEmployeeById/:_id",employeeController.deleteEmployee);

// http://localhost:3000/api/employees/updateEmployeeSalary
router.patch("/updateEmployeeSalary",employeeController.updateEmployee);

// http://localhost:3000/api/employees/updateEmployeeAge
router.patch("/updateEmployeeAge",employeeController.updateEmployeeAge);

// http://localhost:3000/api/employees/deleteEmployeebyage
router.delete("/deleteEmployeebyage/:age",employeeController.deleteEmployeeAge);


