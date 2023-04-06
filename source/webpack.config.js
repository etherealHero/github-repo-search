const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// let mode = "development"

let mode = process.env.NODE_ENV === "production" ? "production" : "development"

// if (process.env.NODE_ENV === "production") {
//   mode = "production"
// }

module.exports = {
  mode,
  entry: {
    script: "./src/index.js",
  },
  output: {
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
}
