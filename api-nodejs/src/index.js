//Import express app
import app from "./app.js";

//Create const PORT
const PORT = process.env.PORT || 3000;

//puts the server to listen
app.listen(PORT);
console.log("Server running on PORT: ", PORT);