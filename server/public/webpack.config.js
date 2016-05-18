var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.join(__dirname, "assets"),
    filename: "main.js",
  },

  module: {
    loaders: [
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }
    ],

    preLoaders: [
      {
        test: /\.js$/,
        include: pathToRegExp(path.join(__dirname, "app")),
        loader: "jshint-loader"
      },
    ]
  },
  
};
function escapeRegExpString(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
function pathToRegExp(p) { return new RegExp("^" + escapeRegExpString(p)); }