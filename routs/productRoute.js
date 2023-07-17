const express = require('express')
const router = express.Router()
const product = require("../modals/productodal");

router.post("/create_user_data", async (req, res) => {
    try {
      let data = await product.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // get data from data base All data
  router.get("/getAllUserdata", async (req, res) => {
    try {
      let userdata = await product.find({});
      res.status(200).json(userdata);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  // get data from data base by id
  router.get("/userdata/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let data = await product.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  // update data from database  by id
  router.put("/updateData/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await product.findById(id);
      console.log(data, "lop");
      if (!data) {
        return res.status(404).json({ message: "Product not found" });
      }
      let updatedData = await product.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      // const daupta = await product.findById(id)
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  // delete data from database  by id
  router.delete("/deleteUserdata/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let data = await product.findById(id);
      if (!data) {
        return res.status(404).json({ message: "no such product" });
      }
      const deletedata = await product.findByIdAndDelete(id);
      res.status(200).json({ message: `this itewm is deleted` });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  module.exports = router