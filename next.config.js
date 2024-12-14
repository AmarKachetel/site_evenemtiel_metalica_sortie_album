/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* votre configuration ici */
})


const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@fortawesome/react-fontawesome": "@fortawesome/react-fontawesome"
    };

    return config;
  }
};