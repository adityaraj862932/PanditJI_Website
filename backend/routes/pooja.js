const express=require('express');
const {poojalist,newpooja}=require('../controllers/poojas.js');

const router=express.Router();

router.get('/poojalist',poojalist);
router.post('/poojalist',newpooja);

export default router;