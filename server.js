const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// Routes
console.log("User Routes Loaded");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

// MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Home Route
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});