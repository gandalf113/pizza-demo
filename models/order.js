import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    address: {
        street: { type: String, required: true },
        local: { type: String, required: true }
    },
    items: [{
        item: { type: mongoose.Types.ObjectId, required: true, ref: 'MenuItem' },
        amount: { type: Number, required: true },
    }],
    phone_number: { type: String, required: true },
    ordered_on: { type: String, required: true },
});

const Order = models.Order || model('Order', orderSchema);

export default Order;