import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint checks during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
