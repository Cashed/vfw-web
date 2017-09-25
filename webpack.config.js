const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    publicPath: '/public',
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/, enforce: 'pre'},
      {test: /\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
      {test: /\.woff$/, loader: 'url-loader?limit=60000&mimetype=application/font-woff&name=/fonts/[name].[ext]'},
      {test: /\.woff2$/, loader: 'url-loader?limit=60000&mimetype=application/font-woff&name=/fonts/[name].[ext]'},
      {test: /\.eot/, loader: 'url-loader?limit=60000&mimetype=application/vnd.ms-fontobject&name=/fonts/[name].[ext]'},
      {test: /\.ttf/, loader: 'url-loader?limit=60000&mimetype=application/font-ttf&name=/fonts/[name].[ext]'},
      {test: /\.png$/, loader: 'file-loader?limit=10000&mimetype=image/png&name=/img/[name].[ext]'},
      {test: /\.svg$/, loader: 'file-loader?limit=10000&mimetype=image/png&name=/img/[name].[ext]'},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
