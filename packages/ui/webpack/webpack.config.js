const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.ts")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../lib"),
    library: "@trjm/ui-library",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    }
  },
  watchOptions: {
    ignored: ["node_modules", "lib/**/*.js", "lib/**/*.d.ts"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: { configFile: "../tsconfig.development.json" }
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              tsconfigPath: path.join(__dirname, "../tsconfig.development.json")
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])]
};
