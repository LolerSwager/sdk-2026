import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    domains: ["shared.akamai.steamstatic.com"], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },

  
};

export default nextConfig;
