import { config } from "dotenv";
import mongoose from "mongoose";
config();

/**
 * Establishes a connection to MongoDB.
 * - Uses the connection string from the environment variable.
 * - Logs success or failure messages.
 */

export const mongoDBConnection = async() => {

        // Fetch MongoDB URI from environment variables
        const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/elysia-crud";

    try {

            // Connect to MongoDB
            await mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              } as mongoose.ConnectOptions); // Type assertions for Typescript
        console.log("🗄️ Connected to MongoDB");

    }catch(error: any){

        console.log(error.getMessage);
        process.exit(1) // // Exit the process if MongoDB connection fails
    }

}