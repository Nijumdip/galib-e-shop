/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  }, */

  /* images: {
    domains: ['placeimg.com'],
  }, */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

}

module.exports = nextConfig
