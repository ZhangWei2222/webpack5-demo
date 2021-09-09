const less = require('less')

module.exports = function (source) {
    let css = ''
    less.render(source, (err, style) => {
        console.log('--less-loader--', style)
        css = style.css
    })
    return css
}
