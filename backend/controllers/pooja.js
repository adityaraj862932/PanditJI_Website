const Pooja=require('../models/pooja.js');
const {cloudinary}=require("../config/cloudinaryConfig.js");
 
const poojalist=async(req,res)=>{
    const poojalist=await Pooja.find();
    res.json(poojalist);

}; 

const newpooja = async(req,res)=>{
    try{
        const {title,Desc,price,Avaibility}=req.body;
        // console.log("Request Body:", req.body);  // Check text data
        // console.log("Uploaded File:", req.file); // Check file data
        
        if(!req.file){
            return res.status(400).json({message:"Image required"});
        }
        const imageUrl=req.file.path;
        // const imageEtag=req.file.etag;
        const imagePublicId = req.file.filename; // Cloudinary Public ID

        const existingpooja=await Pooja.findOne({imagePublicId});
        if (existingpooja){
            return res.status(400).json({message:'Duplicate image'})  
            }

            const pooja=new Pooja({title,Desc,price,Avaibility,imageUrl,imagePublicId})
            await pooja.save();
            // console.log(pooja);
            

            res.status(201).json({
                message:"Pooja added Successfully",
                data:pooja,
            });
    }catch(error){
        res.status(500).json({message:"server error",error:error.message})
    
    }
};

module.exports={poojalist,newpooja};