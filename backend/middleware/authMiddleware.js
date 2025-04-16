import JWT from 'jsonwebtoken';

export const protect=(req,res,next)=>{
    const token=req.cookies.accessToken

    if(!token) return res.status(400).json({message:"Not Authorised,Login first"})

    try{
        const decoded=JWT.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(error){
        res.status(400).json({message:"invalid token",Error:error})
    }
};

export const adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Access Denied" });
    next();
  };