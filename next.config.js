/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: async () => {
    return Date.now().toString();
  },
  env: {
    project: "NextJS Template",
    version: "1.0.0",
    author: "https://github.com/etcroot",
    repository: "https://github.com/etcroot/NextJS-Template",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
