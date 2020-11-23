const configBase = require('./webpack/webpack.config-base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const optimizationConfig = {
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warning: 'verbose',
          ecma: 6,
          beautify: false,
          compress: true,
          comments: false,
          mangle: false,
          toplevel: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
};

module.exports = {
  ...configBase,
  mode: 'production',
  ...optimizationConfig,
};
