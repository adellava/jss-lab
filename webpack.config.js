var webpack = require('webpack');

var config = {
    context: __dirname + '/app', // `__dirname` is root of project and `src` is source
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/', // `dist` is the destination
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        "transform-es3-property-literals",
                        "transform-decorators-legacy"
                    ]
                }
            }]
        }]
    }
};

module.exports = config;
