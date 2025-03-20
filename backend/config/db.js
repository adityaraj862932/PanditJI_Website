require("dotenv").config()
const mosgoose = require("mongoose");

const connectDB = () =>{
    try{
        mosgoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully");
    }catch(err){
        console.log(`Database Did not connect ${err.message}`)
    }
}

module.exports = connectDB;