const express  = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express();


const mongoose = require('mongoose')
let dbpath = 'mongodb://defbee:100robots@ds127644.mlab.com:27644/defbee'
//let dbpath = 'mongodb://chatroom:1chatroom@ds153824.mlab.com:53824/chatroom'
const mongoDB = process.env.MONGODB_URI || dbpath
mongoose.connect(mongoDB,  { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/definition', routes)// localhost:2340/definition/8493y5349u

const PORT = 2340;

app.listen(PORT, ()=>{
  console.log(`Your server is running on PORT ${PORT}`)
})