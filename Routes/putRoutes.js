const express = require('express'); 

const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const Item = require("../models/Items");

const router = express.Router();

router.put("/category/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        console.log(updatedCategory);
        res.status(200).json({ message: "Category updated successfully", data: updatedCategory });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }

})

router.put("/subcategory/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSubCategory = await SubCategory.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedSubCategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }
        console.log(updatedSubCategory);
        res.status(200).json({ message: "Subcategory updated successfully", data: updatedSubCategory });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.put("/item/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let { baseAmount, discount, totalAmount, ...updateData } = req.body;

        const updateItem = await Item.findById(id);
        if (!updateItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        baseAmount = baseAmount ?? updateItem.baseAmount;
        discount = discount ?? updateItem.discount;
        totalAmount = baseAmount - (discount || 0);

        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { baseAmount, discount, totalAmount, ...updateData },
            { new: true }
        );

        res.status(200).json({ message: "Item updated successfully", data: updatedItem });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

module.exports = router;