const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd', // 使得 webpackNumbers 这个包，可以与 CommonJS、AMD 以及 script 标签使用
    },
  },
  externals: { // 将外部 library，比如 lodash 的控制权交给使用方，让他下载，不打包到自己的包里
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};