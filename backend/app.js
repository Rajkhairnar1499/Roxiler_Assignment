import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { fileURLToPath } from "url"; // Import fileURLToPath function
import path from "path";

import transactionRoutes from "./routes/TransactionRoute.js";

const __filename = fileURLToPath(import.meta.url); // Get the filename
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/transactions", transactionRoutes);

// Serve static assets from the frontend build folder
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for any route that is not matched by the backend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

export default app;
