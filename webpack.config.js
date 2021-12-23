const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Specify loaders for images.
    assetModuleFilename: 'imgs/[name][hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.((sa|sc|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // By default every loadable attributes (for example - <img src="image.png"/>) is imported.
      // See more details here https://webpack.js.org/loaders/html-loader
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // We don't need "file-loader" here. "html-loader" loads all the images
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[hash].[ext]',
      //       outputPath: 'img',
      //     },   
      //   },
      // },
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './index.html'})]
};