const path = require('path')
const webpack = require('webpack')
const apiMocker = require('mocker-api')

const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const htmlOption = function (name, chunks) {
  return {
    template: `public/index.html`,
    filename: `${name}.html`,
    // chunks: [],
    chunks: ['manifest', ...chunks, name, 'header', 'footer', 'hot-update'],
    // cache: true,
    // inject: true,
    // hash: true,
    // minify: {
    //   removeComments: true,
    //   collapseWhitespace: false
    // }
  }
}

module.exports = (env, params) => {
  return {
    entry: {
      index: './src/index',
      header: './src/header',
      footer: './src/footer',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: '[name].js?[hash]',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'common',
            priority: 10,
            minChunks: 1,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css?[hash]',
      }),
      new HtmlWebpackPlugin(htmlOption('index', [])),
      new ESlintPlugin({
        files: 'src',
        extensions: ['js', 'vue'],
        fix: true,
      }),
      new StyleLintPlugin({
        files: ['src/**/*.{vue,html,css,scss,sass,less}'],
        failOnError: true,
        cache: true,
        fix: true,
      }),
    ].concat(
      params.mode !== 'production'
        ? [new webpack.HotModuleReplacementPlugin()]
        : [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
              patterns: [
                {
                  from: 'public/index.html',
                },
              ],
            }),
          ]
    ),
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.(ts|js)$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'vue-style-loader',
            params.mode == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'assets/[name].[ext]?[hash]',
          },
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 8080,
      open: 'http://localhost:8080/',
      disableHostCheck: true,
      overlay: {
        warnings: false,
        errors: true,
      },
      after(app) {
        apiMocker(app, path.resolve('./mock/index.js'))
      },
    },
  }
}
