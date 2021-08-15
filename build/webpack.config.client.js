const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

const isDev = process.env.NODE_ENV === "development";

const defaultPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new HtmlPlugin({
    template: path.join(__dirname, "template.html"),
  }),
];
const devServer = {
  port: 8080,
  host: "0.0.0.0", //本机也可以访问
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
  // open: true,
};

if (isDev) {
  config = merge.merge(baseConfig, {
    devServer,
    devtool: "eval-cheap-module-source-map",
    plugins: defaultPlugins.concat([new webpack.HotModuleReplacementPlugin()]),
    // import Vue from 'vue'
    resolve: {
      alias: {
        vue: path.join(__dirname, "../node_modules/vue/dist/vue.esm.js"),
      },
    },
    // resolve: {
    //   alias: {
    //     vue: "vue/dist/vue.js",
    //   },
    // },
  });
}

config.resolve = {
  alias: {
    model: path.join(__dirname, "../src/model/model-client.js"),
  },
};

module.exports = config;
