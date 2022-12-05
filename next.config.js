/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
  trailingSlash: true,
});

module.exports = nextConfig;
