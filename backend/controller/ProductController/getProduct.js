const TshirtModel = require("../../model/TShirt");

async function getproduct(req, res) {
  let query = {};
  let id = +req.params.id;
  if (id) {
    query = { productId: id };
  }
  try {
    const getItems = await TshirtModel.find(query);
    res.send(getItems);
  } catch (err) {
    console.log("server error", err);
  }
}

module.exports = getproduct;
