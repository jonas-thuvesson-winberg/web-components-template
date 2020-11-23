const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = {
  entry: path.join(__dirname, '..', 'src', 'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        path.resolve(__dirname, '..', 'src', 'index.html'),
        path.resolve(__dirname, '..', 'src', 'styles.css'),
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(txt|html)$/i,
        use: 'raw-loader',
        exclude: [path.join(__dirname, '..', 'index.html')],
      },
      {
        test: /.js$/,
        include: [path.resolve(__dirname, '..', 'src')],
        exclude: [
          path.resolve(__dirname, '..', 'node_modules'),
          path.resolve(__dirname, '..', 'bower_components'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
};

module.exports = baseConfig;
