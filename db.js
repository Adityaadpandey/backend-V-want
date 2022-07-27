const mongoose = require('mongoose')

const url = `mongodb+srv://Aditya:adpandey@cluster0.h40tx.mongodb.net/V-want?retryWrites=true&w=majority`;

const connectToMongo =()=>{

    mongoose.connect(url, ()=>{

        console.log("Connected to MongoDB");

    });

}

module.exports = connectToMongo;
