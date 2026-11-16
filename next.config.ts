import type { NextConfig } from "next";

const repoName = "Bao-Ve-Tre-Vi-Thanh-Nien-Va-Nguoi-De-Bi-Ton-Thuong-Trong-Cau-Truc-Quan-Tri-Ton-Giao";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
