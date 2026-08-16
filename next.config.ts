import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
