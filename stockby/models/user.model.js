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
});

mongoose.models = {};

var User = mongoose.model("User", user);


module.exports= User
