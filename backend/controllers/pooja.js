const pooja=require('../models/pooja.js');

export const poojalist=async(req,res)=>{
    const poojalist=await pooja.find();
    res.json(poojalist);

};

export const newpooja=async(req,res)=>{
    const {title,Desc,price,Avaibility,imageUrl}
}