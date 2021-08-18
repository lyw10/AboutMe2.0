const path = require("path");
const { srcPath, distPath } = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const createVueLoaderOptions = require("./vue-loader.config");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    index: path.join(srcPath, "index.js"),
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: createVueLoaderOptions(isDev),
        // include: srcPath,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "template.html"),
      inject: "body",

      // favicon:
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      model: path.join(srcPath, "model/model-client.js"),
    },
  },
};
