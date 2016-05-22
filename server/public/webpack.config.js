var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./app/app.js",
        "./app/scss/index.scss"
    ],
    output: {
        filename: "./assets/bundle.js"
    },

    module: {
        loaders: [
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
        new ExtractTextPlugin("./assets/bundle.css")
    ]
};