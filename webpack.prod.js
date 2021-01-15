const merge = require("webpack-merge");
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),

      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  }
});