var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        app      : "./server/public/app/js/app.js",
        profile  : './server/public/app/scss/profile.scss',
        blog     : './server/public/app/scss/blog.scss',
        locations: './server/public/app/scss/locations.scss'
    },

    output: {
        filename: "./server/public/assets/js/bundle.js"
    },

    resolve: {
        root: [
            path.resolve(__dirname + '/server/public/app'),
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.css', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader!sass-loader"
                )
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('./server/public/assets/css/[name].css')
    ]
};