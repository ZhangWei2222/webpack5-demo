module.exports = function (source) {
    let reg = /url\((.+?)\)/g   // 匹配url
    let pos = 0;
    let current;

    let arr = ['let list = []']

    while (current = reg.exec(source)) {
        const [matchUrl, g] = current  // 'url("./pic.png")', "./pic.png"
        console.log('========matchUrl========', source, matchUrl, reg, reg.lastIndex, matchUrl.length)
        const lastIndex = reg.lastIndex - matchUrl.length    // 拿到css从开始到url链接之前的index
        const preCode = source.slice(pos, lastIndex)

        arr.push(`list.push(${JSON.stringify(preCode)})`)
        pos = reg.lastIndex
        arr.push(`list.push('url('+ require(${g}) +')')`)    // 图片地址改成require形式放回去
    }

    arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)  // 拼上url地址到结尾的代码
    arr.push(`module.exports = list.join('')`)
    console.log('=====css-loader====', arr.join('\r\n'))
    return arr.join('\r\n')
}