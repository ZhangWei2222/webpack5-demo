const less = require('less')

module.exports = function (source) {
    let css = ''
    less.render(source, (err, style) => {
        console.log('--style--', style)
        css = style.css
    })
    return css
}
