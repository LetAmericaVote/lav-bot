const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: 'url-loader',
    },
  ],
};

const plugins = [
  new ExtractTextPlugin({
    filename: 'dist/main.css',
    allChunks: true,
  })
];

module.exports = {
  entry: [
    'whatwg-fetch',
    './client/index.js'
  ],
  output: {
    filename: './dist/main.js',
  },
  module: buildModule,
  plugins
};
