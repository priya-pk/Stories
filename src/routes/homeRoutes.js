const express = require('express');

const homeRouter = express.Router();
function router(nav){
    var content = [
        {
            title:'Repurpose Content to Reach a Wider Audience',
            author:'97thfloor.com',
            genre:'2 hours ago',
            img:'ursula.jpg'
        },
        {
            title:'14 Useful Sites for Designers',
            author:'devgarage.com',
            genre:'Yesterday',
            img:'suza.jpg'
        },
        {
            title:'Measuring Your Link Building with Google Analytics',
            author:'searchenginewatch.com',
            genre:'Yesterday',
            img:'harrystyles.jpg'
        }
    ]
    homeRouter.get('/',function(req,res){
        res.render("index",{
            nav,
        title:'Library',
            content
        });
    });
    // homeRouter.post('/',function(req,res){
    //     res.redirect('index');
    // });


    return homeRouter;
}

module.exports = router;