const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  WebpackManifestPlugin
} = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清除旧文件
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
    }),
    new WebpackManifestPlugin(),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};