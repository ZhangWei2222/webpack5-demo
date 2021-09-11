module.exports = function (source) {
    let reg = /url\((.+?)\)/g   // 匹配url
    let pos = 0;
    let current;

    let arr = ['let list = []']

    while (current = reg.exec(source)) {
        const [matchUrl, g] = current
        console.log('========matchUrl========', source, matchUrl, reg, reg.lastIndex, matchUrl.length)
        const lastIndex = reg.lastIndex - matchUrl.length
        const preCode = source.slice(pos, lastIndex)

        arr.push(`list.push(${JSON.stringify(preCode)})`)
        pos = reg.lastIndex
        arr.push(`list.push('url('+ require(${g}) +')')`)
    }

    arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)
    arr.push(`module.exports = list.join('')`)
    console.log('=====css-loader====', arr.join('\r\n'))
    return arr.join('\r\n')
}