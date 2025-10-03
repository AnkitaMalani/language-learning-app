import mongoose from "mongoose";

try {
    const client = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected", client.connect.host);
} catch (error) {
    console.error("MongoDb connection error:", error);
    process.exit(1);
}
