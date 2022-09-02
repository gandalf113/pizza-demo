import connectDb from "../../utils/connect-db";
import Reservation from "../../models/reservation";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    if (req.method == "POST") {
        const { name, date, num_people, table_number } = req.body;
        await connectDb();
        const reservation = new Reservation({ name, date, num_people, table_number });
        await reservation.save();
        res.status(201).json({ reservation });
    } else if (req.method == "GET") {
        const reservations = await Reservation.find();
        res.status(200).json({ reservations });
    }
}