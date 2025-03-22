const mongoose=require('mongoose');

const galleryschema=new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true,
    },
    imagePublicId:String,
    date:{type:Date,default:Date.now,}
});

const gallery=mongoose.model('gallery',galleryschema);

module.exports = gallery;