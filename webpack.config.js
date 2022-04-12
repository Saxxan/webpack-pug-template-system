// webpack.config.js
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ],
            },
            {
                test: /\.jpe?g|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader',
                    options: {
                    outputPath: 'assets/'
                    }
                },
            },
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './index.pug',
            inject   : true
        })
    ],
}