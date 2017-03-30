const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use:[
            {
              loader: 'css-loader',
              options:{
                modules:true,
                importLoaders:1,
                localIdentName:'[local]_[hash:base64:5]',
                sourceMap: true,
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap: true,
              }
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true,
    }),
  ],
};
