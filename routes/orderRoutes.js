const express = require("express");
const router = express.Router();

// Test Route
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Order Route Working"
    });
});

module.exports = router;