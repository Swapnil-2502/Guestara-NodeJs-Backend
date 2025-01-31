const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");   
const Item = require("../models/Items");

//Create a new category
const CreateCategory = async (req,res) =>{
    try{
        const {name, image, description, taxApplicability, tax, taxType} = req.body;

        const existingCategory = await Category.findOne({name});
        if(existingCategory){
            return res.status(400).json({message: "Category already exists"});
        }

        const newCategory = new Category({
            name,
            image,
            description,
            taxApplicability,
            tax,
            taxType
        });
        console.log(newCategory);
        await newCategory.save();
        res.status(201).json({message: "Category created successfully", data: newCategory});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

//Create a new subcategory
const CreateSubCategory = async (req,res) =>{
    try{
        const {name, image, description, taxApplicability, tax, categoryId} = req.body;

        const existCategory = await Category.findById(categoryId);
        if(!existCategory){
            return res.status(404).json({message: "category not found"});
        }

        const newSubCategory = new SubCategory({
            name,
            image,
            description,
            taxApplicability: taxApplicability ?? Category.taxApplicability,
            tax: tax ?? Category.tax,
            categoryId
        })
        console.log(newSubCategory);
        await newSubCategory.save();
        res.status(201).json({message:"Subcategory created successfully", data: newSubCategory});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Server error"});
    }
}

//Create a new Item under a Category or SubCategory
const CreateItem = async (req,res)=>{
    try{
        const {name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, categoryId, subCategoryId} = req.body;

        // Validate categoryId and subCategoryId
        const validCategoryId = categoryId && categoryId.trim() !== "" ? categoryId : null;
        const validSubCategoryId = subCategoryId && subCategoryId.trim() !== "" ? subCategoryId : null;

        let existCategory = null;
        let existSubCategory = null;

        if (validCategoryId) {
            existCategory = await Category.findById(validCategoryId);
        }
        if (validSubCategoryId) {
            existSubCategory = await SubCategory.findById(validSubCategoryId);
        }

        if (!existCategory && !existSubCategory) {
            return res.status(404).json({ message: "Category and SubCategory not found, provide at least one of them" });
        }

        const totalAmountCalculated = baseAmount - (discount || 0);

        const newItem = new Item({
            name,
            image,
            description,
            taxApplicability: taxApplicability ?? Category.taxApplicability,
            tax: tax ?? Category.tax,
            baseAmount,
            discount,
            totalAmount: totalAmountCalculated,
            categoryId,
            subCategoryId
        })
        console.log(newItem);
        await newItem.save();
        res.status(201).json({message: "Item created successfully", data: newItem});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {CreateCategory, CreateSubCategory, CreateItem};