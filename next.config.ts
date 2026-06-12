import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/diagnosis",
        destination: "https://cxodex-diagnosis.vercel.app/diagnosis",
      },
      {
        source: "/diagnosis/:path*",
        destination: "https://cxodex-diagnosis.vercel.app/diagnosis/:path*",
      },
    ];
  },
};

export default nextConfig;
