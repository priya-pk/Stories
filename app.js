const express = require('express');
var bodyParser=require("body-parser"); 
const multer  = require('multer');

const app =  express();

const StoreImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});



const nav = [
    {link:'/index',name:'HOME'},
    {link:'/books',name:'BOOKS'},
    {link:'/admin',name:'ADD BOOKS'},
    {link:'/authors',name:'AUTHORS'},
    {link:'/writer',name:'ADD AUTHORS'},
    {link:'/',name:'SIGN IN'},
    {link:'/signup',name:'SIGN UP'}
];
const navs = [
    // {link:'/index',name:'HOME'},
   {link:'/',name:'SIGN IN'},
   {link:'/signup',name:'SIGN UP'}
];
const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorsRouter = require("./src/routes/authorRoutes")(nav)
const homeRouter = require("./src/routes/homeRoutes")(nav)
const signupsRouter = require("./src/routes/signupRoutes")(navs)
const adminRouter = require("./src/routes/adminRoutes")(nav)
const writerRouter = require("./src/routes/writerRoutes")(nav)
const signinRouter = require('./src/routes/signinRoutes')(navs);


app.use(bodyParser.json()); 
app.use(multer({storage:StoreImage}).single('image'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/index',homeRouter);
app.use('/signup',signupsRouter);
app.use('/admin',adminRouter);
app.use('/writer',writerRouter);
app.use('/',signinRouter);




const SignUpdata = require('./src/model/SignUpdata');

app.get('/',function(req,res){
    res.render("signin",
    {navs,
    title:'Library'
    });
});
app.post('/',(req,res)=>{
    
    if(SignUpdata.findOne({email:req.body.email,password:req.body.password})){
        res.redirect('/index')
    }
})


app.post('/',function(req,res){
    res.redirect('/index');
});
app.post('/signup',function(req,res){
    res.redirect('/');
});
// app.post('/add',function(req,res){
//     res.redirect('/books');
// });


app.listen(3000);