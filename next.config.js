/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "http://zine.co.in/",
  },
  trailingSlash: true,
};
