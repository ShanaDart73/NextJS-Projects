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
      {
        protocol: "https",
        hostname: "thefreshandnatural.com",
      },
      {
        protocol: "https",
        hostname: "backyardcitrustrees.com",
      },
      {
        protocol: "https",
        hostname: "carlssfoodcity.com",
      },
      {
        protocol: "https",
        hostname: "www.greenheartuae.com",
      },
      {
        protocol: "https",
        hostname: "gartencenter.li",
      },
      {
        protocol: "https",
        hostname: "exoticfruits.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.flushinghospital.org",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
