//Import router from express
import { Router } from "express";
//Import products controller
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from "../controllers/products.controller.js";

//Create the router
const router = Router();

//Create http methods connection
router
  .get("/products", getProducts)
  .get("/products/:id", getProduct)
  .post("/products", createProduct)
  .patch("/products/:id", updateProduct);

//Export the router
export default router;
