const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const fileName = loaderUtils.interpolateName(this, '[hash].[ext]', {
        content: source
    })
    console.log('--fileName--', fileName)
    this.emitFile(fileName, source)
    return `module.exports = "${fileName}"`
}

module.exports.raw = true;