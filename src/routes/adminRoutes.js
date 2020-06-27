const express = require('express');

const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');



function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addBooks",{
            nav,
        title:'Add Books',
       
        });
    });
    adminRouter.post('/add',function(req,res){
        var item={
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
        }    
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');

    });

    //edit

    adminRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then((book)=>{
            res.render('update',{
                nav,
                title:'Edit Book',
                book
            })
        })
    })
    adminRouter.post('/update/:id',function(req,res){
        const id = req.params.id;
        Bookdata.updateOne({_id:id},{
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
        })
        .then(()=>{
            res.redirect('/books');
        })
    })
    adminRouter.get('/delete/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/books');
        })
    })
    return adminRouter;
}
module.exports = router;
