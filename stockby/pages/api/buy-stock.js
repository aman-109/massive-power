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
    let data = req.body;

    if (!token) {
      return res.status(200).send({ status: false, message: "Token missing" });
    }

    let veri = jwt.verify(token, token_secret);
    if (veri) {
      let st = await Stock.findOne({ symbol: data.symbol });
      if (st) {
        let dup = await User.findOne({ "purchased_stock.stock_id": st._id });
        if (dup) {
          return res
            .status(200)
            .send({ status: false, message: "stock is already buy" });
        }
      }
      if (st) {
        let user = await User.findOneAndUpdate(
          { email: veri.email },
          { $push: { purchased_stock: { stock_id: st._id } } }
        );
        let u = await User.findOne({ email: veri.email });
        let UpSt = await Stock.findOneAndUpdate(
          { symbol: st.symbol },
          { $push: { buyers: { buyer_id: u._id } } }
        );
      } else {
        let newSt = await Stock.create({ ...data });
        let nuser = await User.findOneAndUpdate(
          { email: veri.email },
          { $push: { purchased_stock: { stock_id: newSt._id } } }
        );
        let u1 = await User.findOne({ email: veri.email });
        let UpSt1 = await Stock.findOneAndUpdate(
          { symbol: newSt.symbol },
          { $push: { buyers: { buyer_id: u1._id } } }
        );
      }
      return res
        .status(200)
        .send({ status: true, message: "stock is buy successfully" });
    } else {
      return res.status(200).send({ status: false, message: "jwt expired" });
    }
  } else {
    return res
      .status(200)
      .send({ status: false, message: "req_method_not_supported" });
  }
};

export default connectDB(handler);

// {
//     "name":"Prasad Karde",
//     "email":"kardeprasad1996@gmail.com",
//     "password":"123456",
//     "age":21,
//     "user_id":"BHPX5163"

//   }

// {
//   "quantity":5,
//   "name":"apple",
//   "symbol":"AAPL",
//   "image":"kdkdkdkdkdk",
//   "price":100,
//   "total_price":500

// }
