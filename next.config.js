/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eukariae-api.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/productos',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/productos/:id',
        destination: '/products/:id',
        permanent: true,
      },
      {
        source: '/quienes-somos',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
