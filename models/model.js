const mongoose = require ('mongoose') 
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;

let DefinitionSchema = new Schema ({
    word : { type : String},
    definition : { type : String}
})

DefinitionSchema.plugin(random);

module.exports = mongoose.model('db', DefinitionSchema);