import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function Message() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get("http://localhost:8000/admin/allmessage");
                let data = response.data.reverse();
                setMessages(data);
                console.log(messages);
            } catch (err) {
                alert("Something went wrong: " + err.message);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">Messages</h2>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
                        <h3 className="text-lg font-semibold text-green-600">Name: {message.Name} </h3>
                        <p className="text-gray-700"><strong>Number:</strong> {message.Number}</p>
                        <p className="text-gray-700"><strong>Email:</strong> {message.Email}</p>
                        <p className="text-gray-700"><strong>Message:</strong> {message.Message}</p>
                        <p className="text-gray-500 text-sm"><strong>Date:</strong> {moment.utc(Message.Date).local().format("YYYY-MM-DD HH:mm:ss")}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No messages found</p>
            )}
        </div>
    );
}

export default Message;
