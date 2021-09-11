const loaderUtils = require('loader-utils')

// 普通 loader
function loader(source) {
    console.log('style normal loader', JSON.stringify(source))
    const str = `
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style)
  `
    return str
}

loader.pitch = (remainingRequest) => {
    console.log('===remainingRequest====', remainingRequest)
    const req = loaderUtils.stringifyRequest(this, '!!' + remainingRequest)
    const str = `
    let style = document.createElement('style')
    style.innerHTML = require(${req})
    document.head.appendChild(style)
  `
    return str
}

module.exports = loader