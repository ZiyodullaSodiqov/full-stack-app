const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    title: {
        type: String, require: true
    },
    name:{
        type: String, require: true
    },
    number:{
        type: String, require: true
    },
    time:{
        type: String, require: true
    },
    cash:{
        type: Number, require: true
    },
    tayyor:{
        type:Boolean, require: true
    },
    hisob: Number
})

module.exports = mongoose.model("todo" , todoSchema)