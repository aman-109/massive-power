import connectDB from "../../config/db";
const Stock = require("../../models/stock.model");
const User = require("../../models/user.model");
import { getCookie } from "cookies-next";
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_SECRET;
const refreshToken_secret = process.env.REFRESHTOKEN_SECRET;

const handler = async (req, res) => {
  if (req.method === "POST") {
    let token = getCookie("token", { req, res });
    let { symbol } = req.body;

    if (!token) {
      return res.status(200).send({ status: false, message: "Token missing" });
    }

    try {
      let veri = jwt.verify(token, token_secret);
      let st1 = await Stock.findOne({ symbol });
      let u1 = await User.findOne({ email: veri.email });

      let upSt = await Stock.findOneAndUpdate(
        { _id: st1._id },
        { $pull: { buyers: { buyer_id: u1._id } } }
      );

      let upU = await User.findOneAndUpdate(
        { _id: u1._id },
        { $pull: { purchased_stock: { stock_id: st1._id } } }
      );

      return res
        .status(200)
        .send({ status: true, message: "stock is sell successfully" });
    } catch (e) {
      return res.status(200).send({ status: false, message: e.message });
    }
  } else {
    return res
      .status(200)
      .send({ status: false, message: "req_method_not_supported" });
  }
};

export default connectDB(handler);

// let user = await User.findOne({email:veri.email}).populate("purchased_stock.stock_id")


