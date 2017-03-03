import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import baseConfig from './webpack.config.base';

const srcPath = path.resolve(path.join(__dirname, 'app'));
const distPath = path.resolve(path.join(__dirname, 'dist'));

export default merge(baseConfig, {
  entry: {
    app: path.join(srcPath, 'index.js'),
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      }
    }),
  ],
});
