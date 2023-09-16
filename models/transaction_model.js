const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    text : {
        type : String, 
        required : [true, "Please add some text"]
    },
    amount : {
        type : Number, 
        required : [true, "Please enter a valid amount"]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const model = mongoose.model('transaction', TransactionSchema); //automatic plural

module.exports = model;