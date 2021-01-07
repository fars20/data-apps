const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./lib/index.js",
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: Infinity,
          },
        }
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist",'umd'),
    libraryTarget: "umd",
    library: "idata-apps-moon-phases"
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
