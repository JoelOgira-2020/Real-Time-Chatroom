const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: './js/app.js',
        chat: './js/chat.js',
        ui: './js/ui.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}