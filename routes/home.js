const express = require('express');
const {getTransactions, postTransaction, deleteTransaction} = require('../controllers/request');

const router = express.Router();

router
    .route('/')
    .get(getTransactions)
    .post(postTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router;