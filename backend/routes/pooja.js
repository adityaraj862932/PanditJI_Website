const express=require('express');
const {upload}=require('../config/cloudinaryConfig.js')
const {poojalist,newpooja,deletepooja,findpooja}=require('../controllers/pooja.js');

const router=express.Router();

router.get('/poojalist',poojalist);
router.get('/poojalist/:id',findpooja);
router.post('/newpooja',upload.single("imageUrl"),newpooja);
router.delete('/poojalist/:id',deletepooja);

module.exports=router;