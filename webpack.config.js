const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"), // 當前路徑 + 相對路徑 = 絕對路徑
  entry: {
    index: "./main", // 透過 Resolve 簡化 entry
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].[contenthash].js", // 會依照 entry 的 key 來更改 output 的 name
    assetModuleFilename: "[path][contenthash][ext]", // 輸出圖片
    clean: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src/"),
      path.resolve(__dirname, "node_modules/"),
    ],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp4|ogg|svg|webp|woff|woff2|ttf|eot)$/i,
        type: "asset", // Webpack 5 不需要 url-loader
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"], // Loader 的順序是由後面執行到前面的
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
        // include: path.resolve("."),
      },
    ],
  },
  // 解決 Loaders 做不到的事情
  plugins: [
    new HtmlWebpackPlugin({
      title: "Studio Ghibli",
      favicon: "./favicon.ico",
      filename: "index.html",
      template: "./index.html",
      chunks: ["vendor", "index"], // JS 不用手動加在 HTML
    }),
  ],
  optimization: {
    splitChunks: {
      // 把 node_modules 與自己的 entry 拆開來
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
      },
    },
  },
  // webpack-dev-server
  devServer: {
    compress: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3070",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
    host: "0.0.0.0",
    hot: true,
    historyApiFallback: true,
    allowedHosts: "all",
  },
};
