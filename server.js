import { app } from "./backend/app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./backend/config/database.js";
import cloudinary from "cloudinary";

const PORT = process.env.PORT || 5000;
dotenv.config({path: "./backend/config/config.env"});

connectDatabase();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  
})


app.listen(process.env.PORT, ()=>{
    console.log("listening on port " + process.env.PORT);
});