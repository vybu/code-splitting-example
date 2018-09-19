const HtmlWebpackPlugin = require('html-webpack-plugin'); //eslint-disable-line
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //eslint-disable-line

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/client/index.js'),
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
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
      filename: 'styles/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],

  mode: 'development',
};
