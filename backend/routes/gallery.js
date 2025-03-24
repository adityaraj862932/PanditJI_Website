const express=require('express')
const {upload2}=require('../config/cloudinaryConfig.js')
const {allphotos,addphotos,deletephoto}=require('../controllers/gallery.js');

const router=express.Router();

router.get('/gallery',allphotos)
router.post('/admin/gallery',upload2.single('imageUrl'),addphotos)
router.delete('/admin/gallery/:id',deletephoto)

module.exports=router;