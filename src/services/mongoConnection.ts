import mongoose from "mongoose";

export const mongoDBConnection = async() => {

    try {

        await mongoose.connect("mongodb://localhost:27017/elysia-curd");
        console.log("🗄️ Connected to MongoDB");

    }catch(error: any){

        console.log(error.getMessage);
        
    }

}