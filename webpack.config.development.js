import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { spawn } from 'child_process';

import baseConfig from './webpack.config.base';

const port = process.env.PORT || 3000;

const srcPath = path.resolve(path.join(__dirname, 'app'));
const distPath = path.resolve(path.join(__dirname, 'dist'));

export default merge(baseConfig, {
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      path.join(srcPath, 'index.js'),
    ]
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port,
    hot: true,
    contentBase: distPath,
    historyApiFallback: true,
    setup(app) {
      console.log(app.get('port'));
      if (process.env.START_HOT) {
        const environment = { ...process.env, PORT: port };

        spawn('npm', ['run', 'start-hot'], { shell: true, env: environment, stdio: 'inherit' })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError));
      }
    }
  },
});