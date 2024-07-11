const express = require('express');
const app = express();
const PORT=3000;
const mongoose = require('mongoose');
const UserRouter =require('./routes/user');
app.use(express.urlencoded({extended:false}));
app.use('/user',UserRouter);
mongoose.connect("mongodb://127.0.0.1:27017/restapi").then(()=>{
    console.log("Connected to database");
}).catch(err=>{
    console.log("Something went wrong!!!");
})
app.get("/",(req,res)=>{
    return res.send("Welcome to restfull api");
})
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})