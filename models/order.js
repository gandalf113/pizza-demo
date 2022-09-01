import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    address: {
        street: { type: String, required: true },
        local: { type: String, required: true }
    },
    items: [{
        itemId: { type: String, required: true },
        amount: { type: Number, required: true },
    }],
    ordered_on: { type: String, required: true },
});

const Order = models.Order || model('Order', orderSchema);

export default Order;