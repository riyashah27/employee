//Step1: Include all modules
const express=require('express');
const path=require('path');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const apiEmpRouter=require('./server/api-employee.route');
const app=express();

//Step2: Configuration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database Connected"),
    (err)=>console.log("Failed to connect to database")
);

//Step3: Handling app static resource and api call
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));//It will load all the static assests like html,css,images,etc
app.get('/',(req,res)=>{
    console.log("Called Get");
    res.sendFile(__dirname+"/public/index.html");
});
    //When server will start it will display this value

//To call apiEmployee route
app.use('/emp',apiEmpRouter);

//Step 4: Starting server
app.listen(4000,()=>{console.log("Server listening at 4000")});