const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".scss",
      ".png",
      ".svg",
      ".jpg",
      ".gif",
      ".eot",
      ".ttf",
      ".woff",
      ".woff2",
      ".jpeg",
      ".bmp",
      ".webp",
      ".ico",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    library: {
      name: "grpc",
      type: "umd",
    },
  },
  // dont need dev because common is both dev and prod
  // mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[contenthash].css",
      ignoreOrder: true,
    }),
    new ESLintWebpackPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      emitWarning: true,
    }),
  ],
}
