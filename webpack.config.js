const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    // entry: './src/index.js',
    entry: {
        index: './src/importer/index.js',
        image: './src/importer/image_importers.js',
        css: './src/importer/css_importers.js',
        js: './src/importer/js_importers.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/page/index.html',
          filename: './index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/page/login-signup.html',
          filename: './login-signup.html'
        })
      ],
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                outputPath: './image',
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
};