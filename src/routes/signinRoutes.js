const express = require('express');
const signinRouter = express.Router();
const SignUpdata = require('../model/SignUpdata');

signinRouter.use(express.static('./public'));

 function router(navs){
    
    signinRouter.get('/',(req,res)=>{
        res.render('signin',{
            navs,
            title:'Library'
        });
    });



signinRouter.post('/',(req,res)=>{
    var data ={
        email : req.body.email,
        password : req.body.password
    }
    var signIn = SignUpdata(data);
    SignUpdata.findOne({email:signIn.email,password:signIn.password},(er,user)=>{
        if(er){
            console.log(er);
            return res.status(500).send();
        }
        if(!user){
            return res.status(404).send('Invalid');
        }
        if(user){
            res.redirect('/index');
        }
    })
})
    
 return signinRouter;
}

module.exports = router;