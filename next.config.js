/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["package-name"],
  experimental: {
    optimizePackageImports: ["icon-library"]
  },
  output: "export",
  images: {
    domains: ["assets.aceternity.com", "cdn.dribbble.com"]
  }
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
