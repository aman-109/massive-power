/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodburl:"mongodb+srv://aman:aman1234@cluster0.mh0cbnv.mongodb.net/stockby?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
