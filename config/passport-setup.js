const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

passport.use(new GoogleStrategy({
    //option for strategy
    callbackURL : '/auth/google/redirect',
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret

}, ()=>{
    // passport callback
}))

// )

// const setupAuth = (app) => {
//     // #3 set up passport strategy
//     passport.use(new GoogleStrategy({
//       callbackURL : '/auth/google/callback',
//       clientID : keys.google.clientID,
//       clientSecret : keys.google.clientSecret
//     }, (accessToken, refreshToken, profile, done) => {
//         return done(err, null);
//         }))
    
  

//     passport.serializeUser(function(user, done) {
//       console.log('we are serializing');
//       done(null, user);
//     });
  
   
//     passport.deserializeUser(function(user, done) {
//       console.log('we are deserializing');
//         done(null,user)
//     });
  
//     // #6 initialize passport middleware and register it with express
//     app.use(passport.initialize());
  
//     // #7 start passport's session management middleware and
//     // register it with express
//     app.use(passport.session());
  
//     // #8 register our login, logout, and auth routes
//     app.get('/auth/google',
//       passport.authenticate('google'));
  
//     app.get('/auth/google/callback', (req, res) => {
//         res.redirect('/')
//         })

//     }

//   const ensureAuthenticated = (req, res, next) => {
  
//     if (req.isAuthenticated()) {
//       // req.user is available for use here
//       console.log('we are all good');
//       return next();
//     }
  
//     console.log('clearly, they are not authenticated');
//     // denied. redirect to login
//     res.redirect('/');
//   }
  
//   // Our default export is the `setupAuth` function.
//   // That will be used like so:
//   // const setupAuth = require('./auth');
//   // setupAuth(app);
//   module.exports = setupAuth;
  
//   // Secondarily, we want to export our route handler that checks
//   // for a logged-in user.
//   // That gets pulled in like so:
//   // const ensureAuthenticated = require('../auth').ensureAuthenticated;
//   module.exports.ensureAuthenticated = ensureAuthenticated;