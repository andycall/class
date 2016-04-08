var path = require('path');

module.exports = {
  entry: './src/generator.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|png|gif|jpeg)/,
        loaders: ['image']
      }
    ]
  },
  watch: true
}