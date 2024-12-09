/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for development
  swcMinify: true,       // Enables SWC compiler for faster builds
  experimental: {
    appDir: true,        // Ensure this is enabled for `app` directory
  },
};

export default nextConfig;
