require("dotenv").config()
const mosgoose = require("mongoose");

const connectDB = async() =>{
    try{
        await mosgoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully");
    }catch(err){
        console.log(`Database Did not connect ${err.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;