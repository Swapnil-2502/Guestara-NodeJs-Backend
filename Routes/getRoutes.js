const express = require('express'); 

const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const Item = require("../models/Items");

const router = express.Router();

router.get("/category", async (req,res) => {
    try {
        const categories = await Category.find();
        console.log(categories);
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
})

router.get("/category/:idOrName", async (req,res) =>{
    try {
        const { idOrName } = req.params;
        let category;

        if (idOrName.match(/^[0-9a-fA-F]{24}$/)) {
            category = await Category.findById(idOrName);
        } else {
            category = await Category.findOne({ name: idOrName });
        }

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        console.log(category);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
})

router.get("/subcategory", async (req,res) => {
    try{
        const subcategories = await SubCategory.find();
        console.log(subcategories);
        res.status(200).json(subcategories);
    }
    catch(err){
        res.status(500).json({message: "Internal server error", error: err.message});
    }
})

router.get("/subcategory/bycategory/:categoryId", async (req,res) => {
    try{
        const {categoryId} = req.params;
        const subcategories = await SubCategory.find({categoryId});
        console.log(subcategories);
        res.status(200).json(subcategories);
    }
    catch(err){
        res.status(500).json({message: "Internal server error", error: err.message});
    }
})

router.get("/subcategory/:idOrName", async (req,res) =>{
    try {
        const { idOrName } = req.params;
        let subcategory;

        if (idOrName.match(/^[0-9a-fA-F]{24}$/)) {
            subcategory = await SubCategory.findById(idOrName);
        } else {
            subcategory = await SubCategory.findOne({ name: idOrName });
        }

        if (!subcategory) {
            return res.status(404).json({ message: "SubCategory not found" });
        }
        console.log(subcategory);
        res.status(200).json(subcategory);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
})

router.get("/items", async (req,res) =>{
    try{
        const allitems = await Item.find();
        console.log(allitems);
        res.status(200).json(allitems);
    }
    catch(err){
        res.status(500).json({message: "Internal server error", error: err.message});
    }
})

router.get("/items/bycategory/:categoryId", async (req,res)=>{
    try{
        const {categoryId} = req.params;   
        const itemsundercategory = await Item.find({categoryId});

        if(itemsundercategory.length == 0){
            return res.status(404).json({ message: "No items found for this category" });
        }

        console.log(itemsundercategory);
        res.status(200).json(itemsundercategory);
    }
    catch(err){
        res.status(500).json({message:"Internal server error", error: err.message});   
    }
    
})

router.get("/items/bysubcategory/:subCategoryId", async (req,res)=>{
    try{
        const {subCategoryId} = req.params;   
        const itemsundersubcategory = await Item.find({subCategoryId});
        
        if(itemsundersubcategory.length == 0){
            return res.status(404).json({ message: "No items found for this Subcategory" });
        }

        console.log(itemsundersubcategory);
        res.status(200).json(itemsundersubcategory);
    }
    catch(err){
        res.status(500).json({message:"Internal server error", error: err.message});   
    }
    
})

router.get("/items/:idOrName", async (req,res) =>{
    try {
        const { idOrName } = req.params;
        let item;

        if (idOrName.match(/^[0-9a-fA-F]{24}$/)) {
            item = await Item.findById(idOrName);
        } else {
            item = await Item.findOne({ name: idOrName });
        }

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        console.log(item);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
})

module.exports = router;