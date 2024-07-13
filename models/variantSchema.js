const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  storage: {
    type: String,
  },
  ram: {
    type: String,
  },
  price: {
    type: String,
    // required: true,
  },
  quantity: {
    type: String,
    // required: true,
  },
  size: String,
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  created: {
    type: Date,
    default: new Date(),
  },
  update: {
    type: Date,
  },
});

module.exports = mongoose.model("Variant", variantSchema);
