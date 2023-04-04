//Import DB connection
import {pool} from "../database/db.js";


//Get all products from DB
export const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}