const model = require('../models/transaction_model');

const getTransactions = async (req, res, next) => {
    try {
        const data = await model.find();

        return res.status(200).json({
            success : true, 
            count : data.length,
            data : data
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Server error"
        })
    }
}

const postTransaction = async (req, res, next) => {   //what is next?
    try {
        const {text, amount} = req.body;
        const transaction = await model.create({text, amount});

        return res.status(201).json({
            success : true,
            data : transaction
        })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(e => e.message);

            return res.status(400).json({
                success : false, 
                error : messages
            })
        }
        else{
            return res.status(500).json({
                success : false,
                message : "Server error"
            })
        }
    }
}

const deleteTransaction = async (req, res, next) => {
    try {
        const deleted_transaction = await model.findByIdAndRemove(req.params.id);
    
        if(!deleted_transaction){
            return res.status(404).json({
                success : false,
                error : "No record found"
            })
        }

        return res.status(200).json({
            success : true,
            data : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Server error"
        })
    }
}

module.exports = {getTransactions, postTransaction, deleteTransaction};