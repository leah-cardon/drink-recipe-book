const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/dist/index.jsx',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: path.join(__dirname, '/src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
