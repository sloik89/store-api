const Products = require("../models/products");
const getAllProductsStatic = async (req, res) => {
  const products = await Products.find({}).sort("price");
  res.status(200).json({ products });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    // use query operators in mongo db
    queryObject.name = { $regex: name, $options: "i" };
  }
  let result = Products.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    console.log(fieldsList);
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, numberOfHits: products.length });
};
module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
