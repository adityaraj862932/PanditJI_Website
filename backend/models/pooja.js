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
    Avaibility:{
        type:String,
        required:true
    }
})
const Pooja = new mongoose.model("Pooja",PoojaSchema);
module.exports = Pooja;