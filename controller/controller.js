const Definition = require('../models/model')
const Highscore = require('../models/highscore')
const passport  = require ('passport')

exports.test = (req,res)=> {
    res.send(`Greetings from your test controller!`);
};

exports.product_create = function (req, res) {
    let product = new Definition(
        {
            word: req.body.word,
            definition: req.body.definition
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_highscore = (req, res) =>{
    let product = new Highscore(
        {
            username : req.body.username,
            highscore : req.body.highscore
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
}

exports.random_details = (req, res) =>{
    Definition.findOneRandom( (err, definition) => {
        if (err) console.log(err);
        else res.send(definition);
    })
};


exports.login_details = (req, res) =>{
    res.send("logging in with google");
    //handle with passport
};

exports.logout_details = (req,res) =>{
    res.send('logging out goodbye')
    //handle with passport
}

exports.google =  passport.authenticate('google', {
      scope : ['profile']
    })


