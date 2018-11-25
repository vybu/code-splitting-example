const HtmlWebpackPlugin = require('html-webpack-plugin'); //eslint-disable-line
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //eslint-disable-line
const PrefetchCssWebpackPlugin = require('html-prefetch-css-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/client/index.js'),
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src/client')],
        loader: 'babel-loader',

        options: {
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
          ],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
            '@babel/preset-react',
          ],
        },

        test: /\.js$/,
      },
      {
        test: /\.css$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[chunkhash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
    }),
    new PrefetchCssWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],

  mode: 'development',
};
