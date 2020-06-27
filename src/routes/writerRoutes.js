const express = require('express');

const writerRouter = express.Router();
const Authordata = require('../model/Authordata');
 
function router(nav){
    writerRouter.get('/',function(req,res){
        res.render("addAuthors",{
            nav,
            title:'Add Authors',
        });
    });
    writerRouter.post('/adds',function(req,res){
        var items = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
        }
        var author = Authordata(items);
        author.save();
        res.redirect('/authors');
    });


    //update and delete
    writerRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then((author)=>{
            res.render('edit',{
                nav,
                title:'Edit Author',
                author
            })
        })
    })
    writerRouter.post('/edit/:id',function(req,res){
        const id = req.params.id;
        Authordata.updateOne({_id:id},{
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
        })
        .then(()=>{
            res.redirect('/authors');
        })
    })
    writerRouter.get('/delete/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/authors');
        })
    })
    return writerRouter;
}  
module.exports = router;