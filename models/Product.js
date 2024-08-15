const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: Array,
  price: {
    type: Number,
    required: true,
  },
  numInStock: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specification: {
    type: Schema.Types.ObjectId,
    ref: "specification",
    required: true,
  },
});

module.exports = Product = model("product", productSchema);
