const nextConfig = {
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
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_BUCKET: process.env.NEXT_BUCKET,
    NEXT_CDN: process.env.NEXT_CDN
  }
}



module.exports = nextConfig;