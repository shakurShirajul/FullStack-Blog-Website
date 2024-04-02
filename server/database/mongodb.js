import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017',{ dbName: "Blog" })
    .then(()=>{
        console.log("Database is connected....");
    })
    .catch(error=>{
        console.log(error);
    })
}