const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const config = {
  mode: "development",
  target: "web",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "resources/[path][name].[hash:8].[ext]",
        },

      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
