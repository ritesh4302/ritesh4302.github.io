import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no Node.js server).
  output: "export",
  // Project pages are served from https://<user>.github.io/<repo>/ —
  // the deploy workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>".
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: {
    // The default optimizing loader needs a server; images are pre-sized
    // by scripts/sync-assets.mjs instead.
    unoptimized: true,
  },
};

export default nextConfig;
