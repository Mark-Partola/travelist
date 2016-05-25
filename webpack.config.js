var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

ProfileExtract = new ExtractTextPlugin('./server/public/assets/css/profile.css');
BlogExtract = new ExtractTextPlugin('./server/public/assets/css/blog.css');

module.exports = {
    entry: [
        "./server/public/app/app.js",
        "./server/public/app/scss/profile.scss",
        "./server/public/app/scss/blog.scss"
    ],
    output: {
        filename: "./server/public/assets/bundle.js"
    },

    resolve: {
        root: [
            path.resolve(__dirname + '/server/public/app'),
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.css']
    },

    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /profile\.scss$/,
                loader: ProfileExtract.extract(
                    "style-loader",
                    "css-loader!sass-loader"
                )
            },
            {
                test: /blog\.scss$/,
                loader: BlogExtract.extract(
                    "style-loader",
                    "css-loader!sass-loader"
                )
            }
        ]
    },

    plugins: [
        ProfileExtract,
        BlogExtract
    ]
};