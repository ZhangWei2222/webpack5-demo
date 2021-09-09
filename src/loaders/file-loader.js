const loaderUtils = require('loader-utils')

module.exports = function (source) {
    // 根据 loaderContext 生成文件, 这个文件是一串 hash + .jpg 作为后缀名的
    const fileName = loaderUtils.interpolateName(this, '[hash].[ext]', {
        content: source
    })
    console.log('--fileName--', fileName)
    this.emitFile(fileName, source)
    return `module.exports = "${fileName}"`
}

module.exports.raw = true;