/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd16c97c2np8a2o.cloudfront.net',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
        pathname: '/logos/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'icons.llamao.fi',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
      },
    ],
  },
};

export default nextConfig;
