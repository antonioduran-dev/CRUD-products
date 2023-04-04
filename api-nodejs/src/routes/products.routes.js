//Import router from express
import { Router } from "express";
//Import products controller
import { getProducts, getProduct } from "../controllers/products.controller.js";

//Create the router
const router = Router();

//Create http methods connection
router.get("/products", getProducts)
  .get("/products/:id", getProduct);

//Export the router
export default router;
