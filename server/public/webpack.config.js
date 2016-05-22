var ExtractTextPlugin = require("extract-text-webpack-plugin");

ProfileExtract = new ExtractTextPlugin('./assets/css/profile.css');
BlogExtract = new ExtractTextPlugin('./assets/css/blog.css');

module.exports = {
    entry: [
        "./app/app.js",
        "./app/scss/profile.scss",
        "./app/scss/blog.scss"
    ],
    output: {
        filename: "./assets/bundle.js"
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