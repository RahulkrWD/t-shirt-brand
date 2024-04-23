const productModel = require("../../model/product");

async function allProduct(req, res) {
  let query = {};
  let hcost = +req.query.hcost;
  let lcost = +req.query.lcost;
  let sort = req.query.sort;

  // lcost to hcost
  if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  }
  // sort filter
  const sortOption = {
    asc: { price: 1 },
    desc: { price: -1 },
  };
  const sortQuery = sortOption[sort] || {};
  try {
    const findAll = await productModel.find(query).sort(sortQuery);
    res.send(findAll);
  } catch (err) {
    console.log("server error", err);
  }
}

module.exports = allProduct;
