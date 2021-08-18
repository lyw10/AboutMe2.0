const path = require("path");
const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
const smart = require("webpack-merge"); //用花括号，这是一个方法
const { srcPath, distPath } = require("./paths");

module.exports = smart.merge(webpackCommonConf, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0", //本机也可以访问
    progress: true, // 显示打包的进度条
    contentBase: distPath, // 根目录
    compress: true, // 启动 gzip 压缩
    overlay: {
      errors: true, //有错误就显示到网页上
    },
    historyApiFallback: {
      index: "/index.html",
    },
    proxy: {
      "/header": "http://47.100.104.162:8000",
      "/main": "http://47.100.104.162:8000",
    },
    hot: true,
  },
});
