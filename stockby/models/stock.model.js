import mongoose from "mongoose";
var Schema = mongoose.Schema;

var st = new Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  total_price: {
    type: Number,
    require: true,
  },
  buyers: [{ buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
});

mongoose.models = {};

var Stock = mongoose.model("Stock", st);

module.exports = Stock;
