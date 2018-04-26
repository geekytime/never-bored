const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackTemplate = require("html-webpack-template")

module.exports = {
  entry: "./lib/index.js",
  output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlWebpackTemplate,
      title: "Never Bored",
      filename: "index.html",
      inject: false,
      lang: "en-US"
    })
  ]
}
