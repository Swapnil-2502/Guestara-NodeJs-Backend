const express = require('express'); 

const Item = require("../models/Items");

const router = express.Router();


router.get("/items", async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ message: "Please provide an item name to search" });
        }

        const items = await Item.find({ name: { $regex: new RegExp(name, "i") } });

        if (items.length === 0) {
            return res.status(404).json({ message: "No items found" });
        }
        console.log(items);
        res.status(200).json({ message: "Items found", data: items });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});



module.exports = router;