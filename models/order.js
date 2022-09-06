import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    delivery: { type: Boolean, required: true },
    address: {
        street: { type: String, required: false },
        local: { type: String, required: false }
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