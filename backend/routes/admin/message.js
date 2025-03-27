const express=require('express');

const {newmessage,allmessage}=require('../../controllers/admin/message.js')

const router=express.Router();

router.route('/sendmessage',newmessage);
router.route('admin/allmessage',allmessage)

module.exports=router;