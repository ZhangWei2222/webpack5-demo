const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    polyfills: './src/polyfills',
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
  module: {
    // rules: [{
    //   test: require.resolve('./src/globals.js'), // 有报错
    //   use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
    // }, ]
  }
};