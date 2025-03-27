const message=require('../../models/message.js')

const allmessage=async(req,res)=>{
    try{
        const messages=await message.find();
        res.send(messages)

    }catch(error){
        res.status(400).json({message:"Server Error",Error:error})
    }
}

const newmessage=async(req,res)=>{
 try{
    const{Name,Email,Number,Message}=req.body

    if(!Name | !Number | !Message){
        console.log(Name,Email,Number,Message);
        
        return res.status(400).json({message:"Missing Field"})
    }

    const createdmessage=new message({Name,Email,Number,Message})
    await createdmessage.save();
    res.status(201).json({message:"Message Sent Succeffully !"})

 }catch(error){
    res.status(400).json({message:"Server Error !",Error:error})
 }
}

module.exports={newmessage,allmessage};


