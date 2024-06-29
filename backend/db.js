const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to mongo successfully");
    }
    catch(error){
        console.log("Connection failed");
        process.exit(0);
    }
}

module.exports = connectToMongo;