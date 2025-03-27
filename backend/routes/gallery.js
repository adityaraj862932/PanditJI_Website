const express=require('express')
const {upload2}=require('../config/cloudinaryConfig.js')
const {allphotos,addphotos,deletephoto}=require('../controllers/gallery.js');

const router=express.Router();

router.get('/allphotos',allphotos)
router.post('/addphoto',upload2.single('imageUrl'),addphotos)
router.delete('/deletephoto/:id',deletephoto)

module.exports=router;