const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.MONGO_URI;

const db = async () => {
    try{
        await mongoose.connect(URI);
        console.log('db connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = db;