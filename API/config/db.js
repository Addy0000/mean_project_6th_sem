import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToMongoDB();

export default client;
