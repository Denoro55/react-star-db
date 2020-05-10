const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = env => {
    const publicUrl = env.ENVIRONMENT === 'development' ? '/' : new URL(process.env.npm_package_homepage).pathname;

    // Get the root path (assuming your webpack config is in the root of your project!)
    const currentPath = path.join(__dirname);

    // Create the fallback path (the production .env)
    const basePath = currentPath + '/.env';

    // We're concatenating the environment name to our filename to specify the correct env file!
    const envPath = basePath + '.' + env.ENVIRONMENT;

    // Check if the file exists, otherwise fall back to the production .env
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    // Set the path parameter in the dotenv config
    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    // reduce it to a nice object, the same as before (but with the variables from the file)
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});

    return {
        entry: ['@babel/polyfill', './src/index.jsx'],
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'), // путь к dist
            publicPath: publicUrl // чтобы отслеживать изменения и делать reload
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            "plugins": ["@babel/plugin-transform-react-jsx", '@babel/plugin-proposal-class-properties']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'] // (style-loader добавляет стили в head, css-loader позволяет импортить файлы css)
                },
                {
                    test: /\.(jpg|jpeg|png|svg|gif)$/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'] // если не указываем формат файла по умолчанию ищет js и другие в массиве
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new htmlWebpackPlugin({
                publicUrl: publicUrl,
                template: "./public/index.html",
                minify: false
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist/public')
                }
            ]),
            new webpack.DefinePlugin(envKeys)
        ]
    }
};
