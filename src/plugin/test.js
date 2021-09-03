const pluginName = 'testWebpackPlugin'
class TestWebpackPlugin {
  constructor(opt) {
    console.log('插件被使用了', opt)
    this.options = opt
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
      console.log('生成资源到 output 目录之前', compilation.assets)
      compilation.assets['Copyright.txt'] = {
        source: function () {
          return '这是一个版权文件'
        },
        size: function () {
          return 8
        }
      }
      callback()
    })
  }
}

module.exports = TestWebpackPlugin;