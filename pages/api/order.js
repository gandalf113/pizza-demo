import { getSession } from 'next-auth/client';

import connectDb from "../../utils/connect-db";
import Order from "../../models/order";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    await connectDb();

    // Create the order
    if (req.method === "POST") {
        const { address, items, phone_number } = req.body;
        try {
            const ordered_on = new Date().toISOString();
            const order = new Order({ address, items, phone_number, ordered_on });
            await order.save();
            res.status(201).json({ order });
        }
        catch (error) {
            res.status(500).json({ message: "Wystąpił błąd przy tworzeniu zamówienia" });
        }
    }
    // Get the orders (ADMIN ONLY)
    else if (req.method === "GET") {
        const session = await getSession({ req: req });

        if (!session) {
            res.status(401).json({message: "Wymagane uwierzytelnienie"});
            return;
        }

        const orders = await Order.find().populate('items.item');

        res.status(200).json({ orders });
    }
}