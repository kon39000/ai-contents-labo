/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['player.vimeo.com', 'i.vimeocdn.com', 'img.youtube.com'],
  },
}

export default nextConfig