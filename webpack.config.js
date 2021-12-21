const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'img/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './index.html'})]
};