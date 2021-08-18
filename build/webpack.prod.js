const path = require("path");
const { srcPath, distPath } = require("./paths");
const webpackCommonConf = require("./webpack.common.js");
const webpack = require("webpack");
//打包前清理
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const smart = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = smart.merge(webpackCommonConf, {
  mode: "production",
  output: {
    filename: "[name].bundle.js",
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 5 * 1024,
            outputPath: "/img/",
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all", //这表明将选择哪些 chunk 进行优化
    },
    runtimeChunk: true, //会为每个入口添加一个只含有 runtime 的额外 chunk
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash:8].css",
      chunkFilename: "[id].[contentHash:8].css",
    }),
  ],
});
