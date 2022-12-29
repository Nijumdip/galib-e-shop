/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'oxfordshire.org', 'images.unsplash.com','assets-us-01.kc-usercontent.com'],
  }, 

  /* images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'oxfordshire.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  }, */

}

module.exports = nextConfig
