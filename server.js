const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const MONOGDB_URL = process.env.MONOGDB_URL;
const PORT = process.env.PORT;
const productRoutes = require('./routs/productRoute')
// route for different actions performed
app.get("/", async (req, res) => {
  res.send("Welcome");
  console.log(datafromuser);
});

// create dtaa in data base

app.use("/",productRoutes)

// start server and connect with mongodb server
mongoose
  .connect(
    MONOGDB_URL
  )
  .then(() => {
    app.listen(PORT || 3000);
    console.log("connected with db server");
  })
  .catch((err) => {
    console.log(err, "err connecting with db server");
  });
