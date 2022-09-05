import { Schema, models, model } from "mongoose";

const reservationSchema = new Schema({
    day: { type: String, required: true },
    hour: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    num_people: { type: Number, required: true },
    note: { type: String, required: false },
});

const Reservation = models.Reservation || model('Reservation', reservationSchema);

export default Reservation;