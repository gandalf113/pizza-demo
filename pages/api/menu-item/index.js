import { getSession } from "next-auth/client";

import connectDb from "../../../utils/connect-db";
import MenuItem from "../../../models/menu-item";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    await connectDb();

    if (req.method == "POST") {
        const session = await getSession({ req: req });

        if (!session) {
            res.status(401).json({ message: "Wymagane uwierzytelnienie" });
            return;
        }

        const { title, ingredients, price, category } = req.body;
        try {
            const item = new MenuItem({ title, ingredients, price, category });
            await item.save();
            res.status(201).json({ item });
        }
        catch (error) {
            res.status(500).json({ message: "Wystąpił błąd przy tworzeniu pozycji" });
        }
    } else if (req.method == "GET") {
        const items = await MenuItem.find();
        res.status(200).json({ items: items.map(item => item.toObject({ getters: true })) });
    }
    else if (req.method == "PATCH") {
        const items = await MenuItem.find();
        res.status(200).json({ items: items.map(item => item.toObject({ getters: true })) });
    }
}