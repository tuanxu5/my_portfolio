/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.tuanxu5.pages.dev"
          }
        ],
        destination: "https://tuanxu5.pages.dev/:path*",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://pub.dev/api/packages/:path*"
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' https://trusted-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://images.example.com; connect-src 'self';"
          }
        ]
      }
    ];
  },
  experimental: {
    optimizePackageImports: ["icon-library"]
  },
  images: {
    domains: ["assets.aceternity.com", "cdn.dribbble.com"],
    unoptimized: true
  },
  output: "export"
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
