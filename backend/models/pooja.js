const mongoose = require("mongoose");

const PoojaSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    price:Number,
    Desc:{
        type:String,
        require: true,
    },
    Avaibility:{
        type:Boolean,
        require:true
    }
})
const Pooja = new mongoose.model("Pooja",PoojaSchema);
module.exports = Pooja;