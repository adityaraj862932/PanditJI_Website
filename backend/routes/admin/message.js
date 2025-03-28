const express=require('express');

const {newMessage, allMessages}=require('../../controllers/admin/message.js');

const router=express.Router();

router.post('/sendmessage',newMessage);
router.get('/admin/allmessage',allMessages)

module.exports=router;