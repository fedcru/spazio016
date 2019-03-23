const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let PROXY_URL = 'http://spazio016.fede.test/';

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // plugins: [
	// 	// //about SASS compilation
	// 	// new ExtractTextPlugin({
  //   //   filename: "style.css"
  //   // }),
  plugins: [
    new ExtractTextPlugin({
      filename: "style.css"
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      files: [
                {
                    match: [
                        '**/*.php',
                        '**/*.scss',
                        '**/*.twig' //CASSI
                    ],

                      fn: function(event, file) {
                          if (event === "change") {
                              const bs = require('browser-sync').get('bs-webpack-plugin');
                              bs.reload();
                          }
                      } } ],
      port: 3000,
      // proxy the Webpack Dev Server endpoint
      // (which should be serving on http://localhost:3100/)
      // through BrowserSync
      proxy: PROXY_URL
    },
    // plugin options
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: true
    })
  ],
});
