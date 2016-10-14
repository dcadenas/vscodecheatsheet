const path = require('path');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: APP_DIR + '/renderer.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
