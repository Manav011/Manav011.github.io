const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/manav011.github.io",
  output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig
