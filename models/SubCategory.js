const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String},
  description: { type: String },
  taxApplicability: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
