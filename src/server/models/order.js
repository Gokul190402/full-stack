const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    username : {type : String , required : true },
    model : {type : String , required : true},
    color : {type : String , required : true},
    seats : {type : String , required : true},
    type : {type : String , required : true}
})

module.exports = mongoose.model('order',orderSchema)