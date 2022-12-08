const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"), // 當前路徑 + 相對路徑 = 絕對路徑
  entry: {
    index: "./js/index", // 透過 Resolve 簡化 entry
    // about: "./js/about.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].[contenthash].js", // 會依照 entry 的 key 來更改 output 的 name
    assetModuleFilename: "[path][contenthash][ext]", // 輸出圖片
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   // use: [
      //   //   {
      //   //     loader: "file-loader",
      //   //     options: {
      //   //       name: "[path][name].[ext]", // [路徑][檔名].[副檔名]
      //   //     },
      //   //   },
      //   // ],
      //   type: "asset/resource",
      //   generator: {
      //     filename: "[path][name][ext][query]", // 輸出 HTML
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/i,
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // (Plugins 就是拿來解決 Loaders 做不到的事情)
  plugins: [
    new HtmlWebpackPlugin({
      title: "Studio Ghibli",
      filename: "index.html",
      template: "html/template.html",
      chunks: ["index"], // JS 不用手動加在 HTML
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        deleteOriginalAssets: true,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              "gifsicle",
              "jpegtran",
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
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
