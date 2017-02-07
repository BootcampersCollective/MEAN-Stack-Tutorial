var mongoose = require('mongoose');

var pokeSchema = mongoose.Schema({
    name: {type:String, unique:true},
    sprite: String,  // front_default
    weight: Number,
    height: Number,
    experienece: Number,
    salary : Number,
    jobTitle: String
})

module.exports = mongoose.model('PokeApplicant', pokeSchema)
