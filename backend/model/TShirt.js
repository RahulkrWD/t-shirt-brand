const mongoose = require("mongoose");
const TshirtSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  offer: {
    type: Number,
    required: true,
  },
  productDetails: {
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    fit: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Tshirts", TshirtSchema);
