const mongoose = require("mongoose");

const PoojaSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:String,
    Desc:{
        type:String,
        required: true,
        min:0,
    },
    Availability:{
        type:String,
        required:true,
    },
    imagePublicId:{
        type:String,
    },
  
})
const Pooja = new mongoose.model("Pooja",PoojaSchema);
module.exports = Pooja;