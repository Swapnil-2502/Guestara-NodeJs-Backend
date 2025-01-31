const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String},
  description: { type: String },
  taxApplicability: { type: Boolean, required: true },
  tax: { type: Number, default: 0 },
  taxType: { type: String, enum: ["percentage", "fixed"], default: "percentage" },
});

module.exports = mongoose.model("Category", categorySchema);
