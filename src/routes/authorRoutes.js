const express = require('express');

const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    // var authors = [
    //     {
    //         title:'A P J Abdul Kalam',
    //         author:'Wings of Fire',
    //         genre:'Autobiography',
    //         img:'kalam.png'
    //     },
    //     {
    //         title:'Paulo Coelho',
    //         author:'The Alchemist',
    //         genre:'Novel',
    //         img:'paulo.jpg'
    //     },
    //     {
    //         title:'Charles Dickens',
    //         author:'A Tale of Two Cities',
    //         genre:'Novel',
    //         img:'dickens.jpg'
    //     }
    // ]
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
            title:'Authors',
            authors
            });
        })
        
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Author',author
            })
        })
       
    })
    return authorsRouter;
}



module.exports = router;