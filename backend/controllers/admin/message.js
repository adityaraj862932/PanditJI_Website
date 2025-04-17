const Message = require('../../models/message.js'); // ✅ Capitalized Model Name

// Get All Messages
const allMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Create a New Message
const newMessage = async (req, res) => {
    try {
        const { Name, Email, Number, Message: MessageText,Date } = req.body;

        // ✅ Fixed Logical OR Operator
        if (!Name || !Number || !MessageText) {
            return res.status(400).json({ message: "Missing Required Fields" });
        }

        const createdMessage = new Message({ Name, Email, Number, Message: MessageText,Date });
        await createdMessage.save();

        res.status(201).json({ message: "Message Sent Successfully!", data: createdMessage });
    } catch (error) {
        res.status(500).json({ message: "Server Error!", error: error.message });
    }
};

module.exports = { newMessage, allMessages };
