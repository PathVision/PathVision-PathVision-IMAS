/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/PathVision-IMAS', // REPLACE 'your-repository-name' with your actual GitHub project name
  reactStrictMode: true,
  images: {
    unoptimized: true, 
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          framerMotion: {
            name: 'framer-motion',
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            priority: 30,
            enforce: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
