import { getSession } from "next-auth/client";

import connectDb from "../../utils/connect-db";
import Reservation from "../../models/reservation";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    await connectDb();

    if (req.method == "POST") {
        const { day, hour, firstname, lastname, email, phone, num_people, note } = req.body;
        const reservation = new Reservation({ day, hour, firstname, lastname, email, phone, num_people, note });
        await reservation.save();
        res.status(201).json({ reservation });
    } else if (req.method == "GET") {
        const session = await getSession({ req: req });

        if (!session) {
            res.status(401).json({ message: "Wymagane uwierzytelnienie" });
            return;
        }

        const reservations = await Reservation.find().sort({ _id: -1 });;
        res.status(200).json({ reservations });
    }
}