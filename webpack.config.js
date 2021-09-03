const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// ---1
const TestWebpackPlugin = require('./src/plugin/test');
// ---2
// const HtmlWebpackPlugin = require('./src/plugin/html');
// ---3
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const InlineSourcePlugin = require('./src/plugin/inlineSource')

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清除旧文件
    publicPath: '',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './dist',
  },
  // // ---3
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, 'css-loader']
  //     }
  //   ]
  // },
  plugins: [
    new WebpackManifestPlugin(),
    // --- 1
    new TestWebpackPlugin({
      name: 'zw'
    })
    // ---2
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html'
    // })
    // // ---3
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   inject: 'body'
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'main.css'
    // }),
    // new InlineSourcePlugin({
    //   test: /\.(js|css)/
    // }),
  ],
};