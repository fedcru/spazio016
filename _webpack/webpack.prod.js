const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.resolve(__dirname);

module.exports = merge(common, {
  plugins: [
		//about SASS compilation
		new ExtractTextPlugin({
			filename: "style.css"
		}),
  ]
})
