import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    require: true,
    unique: true,
  },
  purchased_stock: [
    { stock_id: { type: mongoose.Schema.Types.ObjectId, ref: "Stock" } },
  ],
});

mongoose.models = {};

var User = mongoose.model("User", user);

module.exports = User;
