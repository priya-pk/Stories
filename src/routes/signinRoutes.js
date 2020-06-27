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
    
    signinRouter.post('/signin',(req,res)=>{
        const {email,password} = req.body;
        SignUpdata.findOne({email:email,password:password})
        .then(()=>{
                res.redirect('/index');
        })
    })
 return signinRouter;
}

module.exports = router;