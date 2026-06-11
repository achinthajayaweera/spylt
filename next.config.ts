import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spylt",
  images: { unoptimized: true },
};

export default nextConfig;