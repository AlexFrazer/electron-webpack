import path from 'path';
import webpack from 'webpack';
import HTMLPlugin from 'webpack-html-plugin';

const srcPath = path.resolve(path.join(__dirname, 'app'));
const buildPath = path.resolve(path.join(__dirname, 'dist'));

export default {
  output: {
    path: buildPath,
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    alias: {
      app: srcPath,
    },
    modules: [
      'node_modules',
      srcPath,
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HTMLPlugin({
      inject: 'body',
      template: path.join(srcPath, 'index.tpl.html'),
    }),
  ],
};
