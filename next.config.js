const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;

  },
  devIndicators: {
    buildActivity: false
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
  }
}



module.exports = nextConfig;