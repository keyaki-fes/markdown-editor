/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.GITHUB_ACTIONS && "/markdown-editor",
  basePath: process.env.GITHUB_ACTIONS && "/markdown-editor",
  trailingSlash: true,
});

module.exports = nextConfig;
