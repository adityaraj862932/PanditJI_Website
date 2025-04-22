const Pooja=require('../models/pooja.js');
const {cloudinary}=require("../config/cloudinaryConfig.js");
 
const poojalist=async(req,res)=>{
    const poojalist=await Pooja.find();
    res.json(poojalist);

}; 

// for After click on booknow pooja to find in database
const findpooja = async(req, res) =>{
    const id = req.params.id;
    
    const found = await Pooja.findById(id);
    res.status(200).json(found);
};

// For add a new Pooja
const newpooja = async(req,res)=>{
    try{
        const {title,Desc,price,Availability}=req.body;

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

            const pooja=new Pooja({title,Desc,price,Availability,imageUrl,imagePublicId})
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

const deletepooja=async(req,res)=>{
    try{ 
        const {id}=req.params;
        
        const puja=await Pooja.findById(id)
   
        if(!puja){      
           return res.status(400).json({message:"No Pooja found !"});
        }
   
       await cloudinary.uploader.destroy(puja.imagePublicId);
       await Pooja.findByIdAndDelete(id)
       res.status(201).json({message:"Deleted Successfully"})
    }catch(error){
        res.status(400).json({messgae:"Server error",Error:error})
    }

}

module.exports={poojalist,newpooja,deletepooja,findpooja};