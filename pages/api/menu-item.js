import connectDb from "../../utils/connect-db";
import MenuItem from "../../models/menu-item";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    if (req.method == "POST") {
        const { title, ingredients, price, category } = req.body;

        await connectDb();
        try {
            const item = new MenuItem({ title, ingredients, price, category });
            await item.save();
            res.status(201).json({ item });
        }
        catch (error) {
            res.status(500).json({ message: "Wystąpił błąd przy tworzeniu pozycji" });
        }
    } else if (req.method == "GET") {
        await connectDb();
        const items = await MenuItem.find();
        res.status(200).json({ items: items.map(item => item.toObject({ getters: true })) });
    }
}