var path = require('path')
var webpack = require('webpack')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const PATHS = {
  src: path.join(__dirname, './webcomponents/atoms/src/'),
  dist: path.join(__dirname, './webcomponents/atoms/lib')
}

module.exports = {
  mode: "development",
  entry: {
    "helloworld": PATHS.src + "/helloworld.ts"
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.p?css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              url: false
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: [".ts", ".js"]
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    }),
    new webpack.IgnorePlugin(/test\.ts$/)
  ]
}