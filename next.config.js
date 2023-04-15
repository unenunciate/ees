/** @type {import('next').NextConfig} */
const nextConfig = {
 
  output: 'standalone',
  
  reactStrictMode: true,
  
  images: {
    domains: ['strapi.ledgerpay.io', 'pbs.twimg.com', 'logos.covalenthq.com', 'dynamic-assets.coinbase.com', '34.149.6.16'],
  },
  videos: {
    domains: ['34.149.6.16'],
  },
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig;
