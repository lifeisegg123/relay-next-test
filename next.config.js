/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: "./src",
      language: "typescript",
      artifactDirectory: "./src/queries/__generated__",
    },
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      // config.plugins.push(new webpack.IgnorePlugin(/lib\/server/));
    }

    return config;
  },
};

module.exports = nextConfig;
