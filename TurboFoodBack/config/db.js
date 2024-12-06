import mongoose from "mongoose";

export const connectDB = async() => {   // export pour acceder a server.js
     await mongoose.connect('mongodb+srv://omar686bd:MbfbO9sjcdNX9wT3@cluster0.dfwve.mongodb.net/react-114').then(()=>console.log("DB Connected"));
}