import mongoose from "mongoose"

export const connectToMongoDB = async () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xycfp.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
}