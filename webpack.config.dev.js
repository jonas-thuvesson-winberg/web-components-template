const configBase = require('./webpack/webpack.config-base.js');
const path = require('path');

const devServerConfig = {
  devServer: {
    contentBase: path.join(__dirname, '..', 'src'),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
};

module.exports = {
  ...configBase,
  mode: 'development',
  ...devServerConfig,
};
