const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
router.get('/',async (req,res)=>{
    // Here we trying to see all the user present in the database!
    const getallusers = await UserModel.find({});
    return res.send(getallusers);
});
router.get('/:id',async (req,res)=>{
    const GetUser = await UserModel.findOne({_id:req.params.id});
    return res.send(GetUser);
})
router.post('/',async (req,res)=>{
    // This route is used to create the new users so we take data and store into the database
    const{fullname,email,password,phone}=req.body;
    await UserModel.create({
        fullname,
        email,
        phone,
        password
    });
    return res.redirect('/user/');
})
router.put('/update/:id',async (req,res)=>{
    // Here we are going to update the user to update the user we need to know the user
    // to know the user we see the user on the basis of id  
    // Here we are updating the password for the simplicity
    await UserModel.findOneAndUpdate({_id:req.params.id},{$set:{password:req.body.password}});
    return res.redirect('/user/');
});
router.delete('/delete/:id',async (req,res)=>{
    // Here we are going to delete the user of the basis of the id 
    // in the url we get the id and the user who holds that id will be delete from the database
     const id = req.params.id;
     await UserModel.deleteOne({_id:id});
     return res.redirect('/user/');
})
module.exports =router;