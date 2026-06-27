import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isna.ir",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/object",
        destination: "https://api.restful-api.dev/objects",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/archives",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
