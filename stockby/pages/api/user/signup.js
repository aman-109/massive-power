import connectDB from "../../../config/db";
const argon2 = require("argon2");
const User = require("../../../models/user.model");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const OTP_LENGTH = 8;

const OTP_CONFIG = {
  lowerCaseAlphabets: false,
  specialChars: false,
};

const generateOTP = () => {
  const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return OTP;
};

const MAIL_SETTINGS = {
  service: "gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendMail = async (params) => {
  try {
    let info = await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: params.to,
      subject: "Hello ✔",
      html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to the StockBy.</h2>
          <h4>Signup Successfull, here is your User Id for login ✔</h4>          
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.UID}</h1>
     </div>
      `,
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, age, password } = req.body;
    let ur = await User.findOne({ email: email });
    if (ur) {
      return res.status(400).send("user alredy exist");
    }
    let otp = generateOTP();
    let hash = await argon2.hash(password);

    let user = await User.create({
      name,
      email,
      password: hash,
      age,
      user_id: otp,
    });
    if (user) {
      let mail = await sendMail({ to: user.email, UID: user.user_id });
      if (mail === false) {
        return res.status(401).send("cant able to send mail");
      }
      return res.status(200).send("check your email for user ID");
    } else {
      return res.status(401).send("something went wrong");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
