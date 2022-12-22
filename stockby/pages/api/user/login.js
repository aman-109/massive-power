import connectDB from "../../../config/db";
const argon2 = require("argon2");
const User = require("../../../models/user.model");
const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";

const token_secret = process.env.TOKEN_SECRET;
const refreshToken_secret = process.env.REFRESHTOKEN_SECRET;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { user_id, password } = req.body;

    let user = await User.findOne({ user_id });
    if (user) {
      if (await argon2.verify(user.password, password)) {
        let token = jwt.sign(
          { email: user.email, name: user.name, age: user.age, username:user.user_id },
          token_secret,
          { expiresIn: "7 days" }
        );
        let refreshToken = jwt.sign(
          { email: user.email, name: user.name, age: user.age,username:user.user_id },
          refreshToken_secret,
          { expiresIn: "28 days" }
        );
        setCookie("token", token, { req, res });
        setCookie("refreshToken", refreshToken, { req, res });
        return res.status(200).send({ status: true, token, refreshToken });
      } else {
        return res
          .status(200)
          .send({ status: false, message: "wrong password" });
      }
    } else {
      return res.status(200).send({ status: false, message: "user not found" });
    }
  } else {
    res
      .status(200)
      .send({ status: false, message: "req_method_not_supported" });
  }
};

export default connectDB(handler);
