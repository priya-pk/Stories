const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books = [
    //     {
    //         title:'Wings of Fire',
    //         author:'A P J Abdul Kalam',
    //         genre:'Autobiography',
    //         img:'wingsoffire.jpg'
    //     },
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo Coelho',
    //         genre:'Novel',
    //         img:'alchemist.jpg'
    //     },
    //     {
    //         title:'A Tale of Two Cities',
    //         author:'Charles Dickens',
    //         genre:'Novel',
    //         img:'2 cities.jpg'
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
            title:'Books',
            books
            });
        })
        
    });

    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Book',
                book
            })
        })
    })

  

    return booksRouter;
}



module.exports = router;