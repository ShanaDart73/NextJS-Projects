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
      {
        protocol: "https",
        hostname: "media.npr.org",
      },
      {
        protocol: "https",
        hostname: "blog.sakura.co"
      },
      {
        protocol: "https",
        hostname: "www.rootsplants.co.uk",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
