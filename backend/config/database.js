import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDatabase = async()=>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URL).then(c=>{
        console.log(`Mongodb connected to ${c.connection.host}`);
    })
    .catch(err=>{
        console.log(err);
    })
}

