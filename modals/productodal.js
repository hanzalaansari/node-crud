const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  name: {
    type: "string",
    // required: true,
  },
  quantity: {
    type: "number",
    // required: true,
    // default: 0,
  },
  price: {
    type: "number",
    // required: true,
  },
  image: {
    type: "string",
    // required: true,
  },
  // isDelete: {
  //   type: Boolean,
  //   default: false,
  // },
},{
    timestamps:true
}
);

 const productModal = mongoose.model("product",productSchema);
 module.exports = productModal