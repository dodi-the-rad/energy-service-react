/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'checkout',
          remotes: {
            dashboard: `dashboard@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
            // shop: 'shop@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './title': './components/exposedTitle.js',
            './home': './pages/index',
            './checkout': './pages/checkout',
          },
          shared: {},
          extraOptions: {}
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig;