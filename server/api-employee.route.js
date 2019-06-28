const express=require('express');
const app=express();

//We are creating api link for employee
const apiEmpRouter=express.Router();

//We are importing employee schema
let Employee=require('./employee');

//Get all employees
apiEmpRouter.route('/allEmp').get((req,res)=>{
    // res.send("<h1>Called All Employees</h1>")
    // Get data from mongodb
    Employee.find((err,data)=>{
        if(err)
        {
            res.send("Failure");
        }
        res.send(data);
    });
});

//Get employee by empId
apiEmpRouter.route('/:empId').get((req,res)=>{
    // res.send("<h1>Called Get Employee By empId</h1>")
    let p_empId=req.params.empId;
    Employee.find({empId:p_empId},(err,data)=>{
        if(err)
        {
            res.send("Fail to load data for"+p_empId);
        }
        res.send(data);
    });
});

//Get employee by empName
apiEmpRouter.route('/ename/:empName').get((req,res)=>{
    //res.send("<h1>Called Get Employee By empName</h1>")
    let p_empName=req.params.empName;
    Employee.find({empName:p_empName},(err,data)=>{
        if(err)
        {
            res.send("Fail to load data for"+p_empName);
        }
        res.send(data);
    });
});

//Add employee
apiEmpRouter.route('/addEmp').post((req,res)=>{
    let body_employee=new Employee(req.body);
    //res.send(employee);
    body_employee.save().then(
        ()=>res.send("New Employee added to database"),
        (err)=>res.send("Fail to add new employee")
    );
});

//Delete employee
apiEmpRouter.route('/delete/:empId').delete((req,res)=>{
    //res.send("<h1>Called Delete Employee</h1>")
    let p_empId=req.params.empId;
    Employee.findOneAndDelete({empId:p_empId},(err,data)=>{
        if(err)
        {
            res.send("Fail to delete data for"+p_empId);
        }
        res.send(p_empId+ ":removed");
    });
});

//Update employee
apiEmpRouter.route('/update/:empId/:designation').put((req,res)=>{
    //res.send("<h1>Called Update Employee</h1>")
    let p_empId=req.params.empId;
    let p_designation=req.params.designation;
    Employee.findOneAndUpdate({empId:p_empId},{designation:p_designation},(err,data)=>
    {
        if(err)
        {
            res.send("Fail to update");
        }
        res.send("Updated record for " +p_empId+ " as " +p_designation);
    });
});

module.exports=apiEmpRouter;
