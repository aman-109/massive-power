import connectDB from "../../config/db";
const User = require("../../models/user.model");
import { getCookie } from "cookies-next";
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_SECRET;
const refreshToken_secret = process.env.REFRESHTOKEN_SECRET;

const handler = async (req, res) => {
  if (req.method === "GET") {
    let token = getCookie("token", { req, res });

    if (!token) {
      return res.status(200).send({ status: false, message: "Token missing" });
    }
    try {
      let veri = jwt.verify(token, token_secret);
      let user = await User.findOne({ email: veri.email }).populate(
        "purchased_stock.stock_id",
        { _id: 0, buyers: 0, __v: 0 }
      );
      return res.status(200).send({ status: true, data: user });
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
