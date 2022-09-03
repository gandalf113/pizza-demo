import connectDb from "../../../utils/connect-db";
import MenuItem from "../../../models/menu-item";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    await connectDb();

    const { id } = req.query;

    if (req.method == "PATCH") {
        let item;
        try {
            item = await MenuItem.findById(id);
        } catch (error) {
            res.status(500).json({ message: "Wystąpił błąd podczas aktualizacji pozycji" });
        }

        if (!item) {
            res.status(404).json({ message: "Nie znaleziono pozycji o podanym id" });
            return;
        }

        let query = { $set: {} };
        for (const key in req.body) {
            if (item[key] && item[key] !== req.body[key]) {
                query.$set[key] = req.body[key];
            }
        }

        const updatedItem = await MenuItem.updateOne({ _id: id }, query);

        res.status(200).json({ updatedItem });
    } else if (req.method === "DELETE") {
        let item;

        try {
            item = MenuItem.findById(id);
        } catch (error) {
            res.status(500).json({ message: "Wystąpił błąd podczas usuwania pozycji" });
        }

        if (!item) {
            res.status(404).json({ message: "Nie znaleziono pozycji o podanym id" });
            return;
        }

        try {
            await item.remove();
            res.status(200).json({ message: `Usunięto pozycję: ${item.title}` });
        } catch (error) {
            res.status(500).json({ message: "Wystąpił błąd podczas usuwania pozycji" });
        }
    }
}