const { Schema, model } = require("mongoose");

const specificationSchema = new Schema({
  model_name: {
    type: String,
    required: true,
  },
  materials: {
    type: String,
    required: true,
  },
  product_size: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
},{
    timestamps: true
});

module.exports = Specification = model("specification", specificationSchema);
