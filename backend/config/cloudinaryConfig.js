// config/cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Fixed typo
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params:async(req,file)=> {
        return{
        folder: "pooja_images",
        allowed_formats: ["jpg", "png", "jpeg"],
        public_id:file.originalname.split(".")[0],
    };

    },
});

const storage2 = new CloudinaryStorage({
    cloudinary,
    params:async(req,file)=> {
        return{
        folder: "Gallery",
        allowed_formats: ["jpg", "png", "jpeg"],
        public_id:file.originalname.split(".")[0],
    };

    },
});

const upload = require("multer")({ storage });
const upload2 = require("multer")({ storage: storage2  });
module.exports = { cloudinary, upload, upload2 };
