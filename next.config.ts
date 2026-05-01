import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This creates the 'out' folder
  trailingSlash: true,   // This helps Hostinger find your pages
  images: {
    unoptimized: true,   // Required because Hostinger shared hosting can't resize images on the fly
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
