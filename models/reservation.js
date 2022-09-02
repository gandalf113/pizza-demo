import { Schema, models, model } from "mongoose";

const reservationSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    num_people: { type: Number, required: true },
    table_number: { type: Number, required: false }
});

const Reservation = models.Reservation || model('Reservation', reservationSchema);

export default Reservation;