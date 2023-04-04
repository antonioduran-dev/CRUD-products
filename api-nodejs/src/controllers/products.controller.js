//Import DB connection
import { pool } from "../database/db.js";

//Get all products from DB
export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Get a product from DB
export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "product not found",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong: " + error,
    });
  }
};

//Create a new product on DB
export const createProduct = async (req, res) => {
  const { name, category, price } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO products (name, category, price) VALUES (?, ?, ?)",
      [name, category, price]
    );

    res.status(201).send({
      id: rows.insertId,
      name,
      category,
      price,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong: " + error,
    });
  }
};

//Updates a product
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, category, price } = req.body;
  try {
    //Create query to update a product
    const [result] = await pool.query(
      "UPDATE products SET name = IFNULL(?, name), category = IFNULL(?, category), price = IFNULL(?, price) WHERE id = ?",
      [name, category, price, id]
    );
    
    //Comprove if exists a product to update
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "product not found",
      });

    //create a query to obtaine the product updated
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    //Send the response
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong: " + error,
    });
  }
};
