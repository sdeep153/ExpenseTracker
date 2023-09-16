const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const home = require('./routes/home.js');
const db = require('./db/db')

dotenv.config();
db();
const app = express();
app.use(express.json()); //middleware to access req.body parser

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions', home);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../server/client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Listening to server at port ${PORT}`);
})