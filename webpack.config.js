const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/dist/index.jsx'),
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/dist'),
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src/dist'),
    hot: true
  }
};
