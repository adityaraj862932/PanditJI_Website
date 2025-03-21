const express=require('express');
const {upload}=require('../config/cloudinaryConfig.js')
const {poojalist,newpooja}=require('../controllers/pooja.js');

const router=express.Router();

router.get('/poojalist',poojalist);
router.post('/newpooja',upload.single("imageUrl"),newpooja);

module.exports=router;