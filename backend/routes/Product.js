const express = require("express");
const router = express.Router();
const getproduct = require("../controller/ProductController/getProduct");
const ProductController = require("../controller/ProductController/addProduct");

// filter product
router.get("/filter/:id", getproduct);
// get all product add and update product
router.get("/get-product", ProductController);

module.exports = router;
