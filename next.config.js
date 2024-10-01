/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["package-name"],
  experimental: {
    optimizePackageImports: ["icon-library"]
  },
  output: "export"
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer(nextConfig)
