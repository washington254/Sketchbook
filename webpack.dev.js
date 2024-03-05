const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    liveReload: false,
    disableHostCheck: true, // Add this line to allow requests from any host
  },
});
