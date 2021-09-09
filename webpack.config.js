const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

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
      title: '开发环境',
    }),
    new WebpackManifestPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [path.resolve(__dirname, './src/loaders/style-loader.js'), path.resolve(__dirname, './src/loaders/css-loader.js'), path.resolve(__dirname, './src/loaders/less-loader.js')]
      },
    ]
  }
};