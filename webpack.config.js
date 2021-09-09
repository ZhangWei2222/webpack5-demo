const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清除旧文件
    publicPath: '/',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loader',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: {
          // loader: './src/loaders/file-loader.js'
          loader: './src/loaders/url-loader.js',
          options: {
            limit: '80000'
          }
        },

      }
    ]
  }
};