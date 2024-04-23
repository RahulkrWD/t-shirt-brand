const productModel = require("../../model/product");

async function getproduct(req, res) {
  let query = {};
  let id = +req.params.id;
  if (id) {
    query = { productId: id };
  }
  try {
    const getItems = await productModel.find(query);
    res.send(getItems);
  } catch (err) {
    console.log("server error", err);
  }
}

module.exports = getproduct;
