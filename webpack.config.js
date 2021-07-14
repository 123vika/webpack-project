const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/js/main.js",
    output: {
       filename: "build.js"
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
    ],
  };