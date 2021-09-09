const loaderUtils = require('loader-utils')
const mime = require('mime')

module.exports = function (source) {
    const { limit } = loaderUtils.getOptions(this)
    console.log('--limit', limit, source.length)
    if (limit && source.length < limit) {
        return `module.exports = "data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`
    } else {
        return require('./file-loader').call(this, source)
    }
}

module.exports.raw = true