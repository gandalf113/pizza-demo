import { Schema, model, models } from "mongoose";

const menuItemSchema = new Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
});

const MenuItem = models.MenuItem || model('MenuItem', menuItemSchema);

export default MenuItem;