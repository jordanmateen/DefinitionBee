const express = require('express');
const controller = require('../controller/controller.js');
const passport  = require ('passport')
const router = express.Router();

router.get('/test', controller.test)

router.post('/create', controller.product_create);

router.post('/highscore', controller.product_highscore);

router.post('/somecode ', (req, res)=>{
    //this is your controller
})

//router.get('/:id', controller.product_details )

router.get('/random', controller.random_details)

router.get('/login', controller.login_details) // passport route

router.get('/logout', controller.logout_details) // passport route

// // router.get('/google', passport.authenticate('google', {
// //     scope : ['profile']
// // }))

// router.get('/google', controller.google) 

module.exports = router;