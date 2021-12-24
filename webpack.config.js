const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // don't minify all build files
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    assetModuleFilename: 'img/[name][ext]', // specify how to store our images in dist
    clean: true, // to clean dist folder right before the buid process
  },
  devServer: {
    static: './dist', // for webpack-dev-server
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // for normalize.css
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. add <link> tag with our css file to HTML
          "css-loader", // 2. turn css into valid js
          "sass-loader" // 1. turn sass into valid css
        ],
      },
      // By default every loadable attributes (for example - <img src="image.png"/>) is imported.
      // See more details here https://webpack.js.org/loaders/html-loader
      {
        test: /\.html$/,
        use: ["html-loader"] // load all images from html <img> tags to dist folder
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}), // create index.html file in "dist" folder based on template and add <script> with bundle
    new MiniCssExtractPlugin() // build all our css into separate file
  ]
};