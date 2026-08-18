/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/services/train-rides",
        destination: "/services/wine-train",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
