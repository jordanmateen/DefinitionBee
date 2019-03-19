const mongoose = require ('mongoose') 
const Schema = mongoose.Schema;

let HighestScoreSchema = new Schema ({
    username : { type : String},
    highscore : { type : Number}
})

module.exports = mongoose.model('HighScore', HighestScoreSchema);