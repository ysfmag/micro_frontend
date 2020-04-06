const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "frost",
    libraryTarget: "umd"
  },
  resolve: {
    alias: {
      react: path.resolve("node_modules/react")
    }
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: []
}
