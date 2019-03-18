const webpack = require("webpack");
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let BASE_URL  = '/';                          //HTML5 history api href for <base>
let API_URL   = 'http://localhost/';     //API endpoints base
const mainCSSPath = path.resolve(__dirname, '../SASS', 'style.scss');
const publicPath = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    main: [
      mainCSSPath
    ]
  },
  // output: {
  //   // filename: process.env.NODE_ENV === 'prod' ? 'assets/scripts/[name].min.js?h=[hash]' : 'assets/scripts/[name].js?h=[hash]',
  //   path: publicPath,
  //   // filename: '[name].js',
  //   publicPath: ''
  // },
  module: {
    rules: [
        {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",
            {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                browsers: [
                  'last 10 versions',
                ],
                grid: true
              })]
            }
          },
        "sass-loader"],
        // publicPath: "/public",
        })
      },
      {//CASSI
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
};
