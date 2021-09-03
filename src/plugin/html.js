const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

const pluginName = 'htmlWebpackPlugin'
class HtmlWebpackPlugin {
  constructor(opt) {
    // 传入filename和template
    this.options = opt
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(pluginName, (compilation, callback) => {
      // 根据模板读取html文件内容
      let result = fs.readFileSync(this.options.template, 'utf-8')
      // 使用cheerio来分析HTML
      // cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方
      let $ = cheerio.load(result)
      // 创建script标签后插入HTML中
      Object.keys(compilation.assets).forEach(item => $(`<script src="${item}"></script>`).appendTo('body'))
      // 转换成新的HTML并写入到dist目录中
      fs.writeFileSync(path.join(process.cwd(), 'dist', this.options.filename), $.html())
      callback()
    })
  }
}

module.exports = HtmlWebpackPlugin;