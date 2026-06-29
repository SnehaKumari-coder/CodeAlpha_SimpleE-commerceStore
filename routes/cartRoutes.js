const express = require("express");
const router = express.Router();

// Test Route
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Cart Route Working"
    });
});

module.exports = router;