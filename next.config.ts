import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spylt",
  assetPrefix: "/spylt/",
  images: { unoptimized: true },
};

export default nextConfig;