/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_PAGES && "/markdown-editor",
  assetPrefix: process.env.GITHUB_PAGES && "/markdown-editor",
  trailingSlash: true,
});

module.exports = nextConfig;
