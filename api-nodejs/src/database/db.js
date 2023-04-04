//Import createPool from mysql2/promise
import {createPool} from "mysql2/promise";

//Create connection to DB
export const pool = createPool({
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "productsdb",
});