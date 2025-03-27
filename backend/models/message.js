const mongoose=require('mongoose')

const messageschema=mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String},
    Number:{type:Number,required:true},
    Message:{type:String,required:true},
})

const message=new mongoose.model('message',messageschema)
module.exports=message;