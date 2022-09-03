import connectDb from "../../utils/connect-db";
import Order from "../../models/order";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    if (req.method == "POST") {
        const { address, items, phone_number } = req.body;
        await connectDb();
        try {
            const ordered_on = new Date().toISOString();
            const order = new Order({ address, items, phone_number, ordered_on });
            await order.save();
            res.status(201).json({ order });
        }
        catch (error) {
            res.status(500).json({ message: "Wystąpił błąd przy tworzeniu zamówienia" });
        }
    } else if (req.method == "GET") {
        await connectDb();
        const orders = await Order.find().populate('items.item');

        res.status(200).json({orders});
    }
}