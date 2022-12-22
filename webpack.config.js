const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    // entry: {
    //     index: './src/index.js',
    //     nav: './src/js/nav.js',
    //     script: './src/js/script.js'
    // },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/login-signup.html',
          filename: './login-signup.html'
        })
      ],
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                outputPath: './assets',
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
};