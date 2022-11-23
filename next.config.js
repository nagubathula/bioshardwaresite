/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/members',
        permanent: true
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
