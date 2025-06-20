import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Serve static files in production (React build)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	// Handle React routing, return all requests to React app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Start server and connect to database
app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
