const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    app: [path.join(srcPath, 'starter.ts')]
  },
  output: {
    path: path.join(distPath),
    filename: 'app.bundle-[hash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(srcPath, 'index.html')
    })]
};
