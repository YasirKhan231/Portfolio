import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
