const express = require('express');

const signupsRouter = express.Router();
const SignUpdata = require('../model/SignUpdata');


function router(navs){
    signupsRouter.get('/',function(req,res){
        SignUpdata.find()
        .then(function(signUp){
            res.render("signup",{
                navs,
            title:'Library',
            signUp
            });
        })
           
        })
        signupsRouter.post('/',function(req,res){
            var item ={
                fname : req.body.fname,
                lname : req.body.lname,
                email : req.body.email,
                password : req.body.password,
                dob : req.body.dob,
                gender : req.body.gender,
                address1 : req.body.address1,
                address2 : req.body.address2,
                state : req.body.state,
                city : req.body.city,
                zip : req.body.zip,
                number : req.body.number
            }
     
        var signUp = SignUpdata(item);
        signUp.save();
        res.redirect('/'); 
       
    });
   
    
    return signupsRouter;
} 
module.exports = router;