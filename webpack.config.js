const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                minimize: true,
                                plugins: [
                                    require('autoprefixer')({}),
                                    require('cssnano')({ preset: 'default' })
                                ],
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ["absolute/path/a", "absolute/path/b"]
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp|pdf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader?limit=100000'
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/build"),
        compress: true,
        port: 3030,
        historyApiFallback: true,
        // https: true
    },
    resolve: {
        alias: {
            Images: path.resolve(__dirname, 'src/assets/images/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Charts: path.resolve(__dirname, 'src/components/charts/'),
            Store: path.resolve(__dirname, 'src/store/'),
            Sass: path.resolve(__dirname, 'src/assets/sass/'),
            Constants: path.resolve(__dirname, 'src/constants/Constants'),
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: false,
            disable: false
        }),
        new HtmlWebpackPlugin({
            // minify: false,
            minify: {
                collapseWhitespace: false,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
            hash: true,
            template: path.join(__dirname, "./src/index.html"),
            favicon: './src/favicon.ico'
        }),
        new Dotenv()
    ],
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({ /* additional options here */ })],
        sideEffects: false,
    }
};
