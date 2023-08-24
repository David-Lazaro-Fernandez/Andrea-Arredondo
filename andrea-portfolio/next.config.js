const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
});
