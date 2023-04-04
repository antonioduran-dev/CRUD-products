//Import express module
import express from "express";
//Import products routes
import productsRoutes from "./routes/products.routes.js";

//Create express application
const app = express();

//middleware to use json data
app.use(express.json());

//indicates the routes to use
app.use("/api", productsRoutes);

//if route doesnt exist, send a message
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

//Export express app
export default app;
