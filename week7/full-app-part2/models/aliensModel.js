var mongoose = require('mongoose');

var aliensSchema = mongoose.Schema({
    name: { type:String, required:true },
    color: String,
    numEyes: Number,
    planetOfOrigin: String,
    numArms: Number,
    alien: { type: Boolean, default: true },
    powers: Array
});

module.exports = mongoose.model('alienModel', aliensSchema)