const mongoose = require('mongoose');

async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err)=> console.log('Error connecting to MongoDB',err));
}

module.exports = {
    connectMongoDB
}