const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = (_, argv) => {
  return merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 8080,
      liveReload: false,
      allowedHosts: "all", // Add this line to allow requests from any host
      static: {
        directory: path.resolve(__dirname),
      },
    },
  });
};
