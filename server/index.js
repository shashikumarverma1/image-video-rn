import express from "express";
import cors from "cors";
import { db_connection } from "./dbConnection.js";
import { student } from "./schema/student.js";
import { router } from "./router.js";

const app = express();

// Establish database connection
db_connection();

// Enable CORS
app.use(cors());

// Parse incoming request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use router
app.use('/', router);

// Start the server
app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
