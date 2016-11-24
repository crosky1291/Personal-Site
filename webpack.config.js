var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var buildPath = path.join(__dirname, 'build');
var mainPath = path.join(__dirname, 'app/app.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  entry: {
    app: mainPath,
    libraries: ['angular', "angular-route"]
  },

  //makes everything go to the build folder
  output: {
    path: buildPath,
    publicPath: '/build/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [

    // I highly recommend using the babel-loader as it gives you
    // ES6/7 syntax and JSX transpiling out of the box
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },

    //the ExtractTextPlugin takes the .css and .scss files and bundles them into
    // one file specified at the bottom in the plugins section.
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    { test: /\.scss$/, 
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    },

    //processes the html angular templates
    { 
      test: /\.html$/, 
      exclude: /node_modules/,
      loader: 'raw'
    }

    ]
  },
  //hides all bundled files from terminal
  //and only shows errors if any..
  devServer: {
    stats: 'errors-only',
  },

  plugins: [
    new ExtractTextPlugin("bundle.css", {allChunks: false}),
    new Webpack.optimize.CommonsChunkPlugin(/* chunkName= */"libraries", /* filename= */"libraries.bundle.js")
  ]
};

module.exports = config;