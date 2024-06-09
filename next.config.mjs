/** @type {import('next').NextConfig} */
import withNextVideo from 'next-videos'
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.guim.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net"
      },
    ],
  },
};

export default withNextVideo(nextConfig);
