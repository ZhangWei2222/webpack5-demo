const babel = require('@babel/core')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    const cb = this.async()
    console.log('--this.resourcePath--', this.resourcePath)
    babel.transform(source, {
        ...options,
        sourceMaps: true,
        filename: this.resourcePath.split('/').pop() // 取出资源文件名
    }, (error, result) => {
        console.log('--result.code--', result.code)
        const { code, map } = result
        cb(error, code, map) // 返回 code 以及 map 文件
    })
}