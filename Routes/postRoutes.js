const express = require('express'); 

const {CreateCategory, CreateSubCategory, CreateItem} = require("../controllers/menuController");

const router = express.Router();

router.post("/category", CreateCategory);
router.post("/subcategory", CreateSubCategory);
router.post("/item", CreateItem);

module.exports = router;