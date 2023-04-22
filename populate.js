const connectDB = require("./DB/connect");
require("dotenv").config();
const Product = require("./models/products");
const JSONproducts = require("./data.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(JSONproducts);
    console.log("success");
    process.exit(0);
  } catch (err) {
    process.exit(1);
    console.log(err);
  }
};
start();
