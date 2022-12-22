/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // mongodburl:"mongodb+srv://aman:aman1234@cluster0.mh0cbnv.mongodb.net/stockby?retryWrites=true&w=majority",
    mongodburl: "mongodb://127.0.0.1:27017/stockby",
    MAIL_EMAIL: "aman.mate.52@gmail.com",
    MAIL_PASSWORD: "fosomikxxqaettgv",
    TOKEN_SECRET:"TOKEN_SECRET_KEY183729",
    REFRESHTOKEN_SECRET:"REFRESHTOKEN_SECRET_KEY183729"
  },
};

module.exports = nextConfig;
