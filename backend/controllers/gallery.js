const { cloudinary } = require('../config/cloudinaryConfig.js');
const gallery=require('../models/gallery.js');

const allphotos=async(req,res)=>{
    const photos=await gallery.find();
    res.send(photos)
}

const addphotos=async(req,res)=>{
  try{
    if (!req.file){
        return res.status(400).json({message:"Please select a image"})
    }

    const imageUrl=req.file.path;
    const imagePublicId=req.file.filename;

    const existingimage=await gallery.findOne({imagePublicId})
    if (existingimage){
        return res.status(400).json({message:"Image already uploaded , Please Select Another One 😊"});
    }
    const newimage=new gallery({imageUrl,imagePublicId});
    await newimage.save();

    res.status(201).json({
        message:"Image Uploaded Successfully .",
        data:newimage,
    })

  }catch(error){
    res.status(400).json({message:"Server error",Error:error,})

  }
}

const deletephoto=async(req,res)=>{
  try{
    const {id} =req.params;

  const photo=await gallery.findById(id)
  if (!photo){
    res.status(400).json({message:"photo not found"})
  }
  await cloudinary.uploader.destroy(photo.imagePublicId)
  await gallery.findByIdAndDelete(id)
  res.status(201).json({message:"Photo Deleted Successfully!"})
  }
  catch(error){
    res.status(400).json({message:"Server Error",Error:error})
  }
}

module.exports={allphotos,addphotos,deletephoto}