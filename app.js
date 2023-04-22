const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./DB/connect");
const app = express();
const productsRouter = require("./routes/products");
// middleware
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/error-handler");
// use of middleware
app.use(express.json());
// products routes

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  await connectDB();
  console.log("server working");
});
app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send('<h1>Store Api </h1> <a href="/api/vi/products">link </a>');
});
app.use(notFound);
app.use(errorHandler);
