/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.ctfassets.net',
    },
    {
      protocol: 'https',
      hostname: 'i.etsystatic.com',
    },
  ],
}
}
