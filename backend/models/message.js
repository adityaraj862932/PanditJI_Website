const mongoose=require('mongoose')

const messageschema=mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String},
    Number:{type:Number,required:true},
    Message:{type:String,required:true},
    Date:{type:Date}
})

const Messages=new mongoose.model('Messages',messageschema)
module.exports=Messages;