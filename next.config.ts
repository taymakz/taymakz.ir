import type { NextConfig } from "next";
import { version } from "./package.json";

const backendUrl = process.env.BASE_API || "http://localhost:8000";
const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/backend/:path*/",
        destination: `${backendUrl}/api/:path*/`, // Proxy to Backend
      },
    ];
  },
  env: {
    version,
  },
};

export default nextConfig;
