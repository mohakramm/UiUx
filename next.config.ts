import type { NextConfig } from "next";

// Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is "/UiUx" when
// deploying to https://mohakramm.github.io/UiUx (set in the deploy workflow),
// and empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
