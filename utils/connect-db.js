import mongoose from "mongoose";

// Here, I register all the models that I have
// Next.js will create the Mongoose model only after
// it's been imported somewhere, so I need this to prevent
// errors when populating
import MenuItem from "../models/menu-item";
import Order from "../models/order";
import Reservation from "../models/reservation";
import User from "../models/user";

const connection = {}

async function connectDb() {
    if (connection.isConnected) {
        return;
    }


    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("CONNECTION STATE: " + connection.isConnected)
}

export default connectDb;