/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: true,
  compress: true,
  images: {
    loader: 'akamai',
    path: '/', // Required for static export
  },
};

module.exports = nextConfig;
