const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'

    return {
        entry: './index.js', // Entry point for your application
        output: {
            filename: 'bundle.js', // Output file name
            path: path.resolve(__dirname, 'dist')
        },
        mode: isProduction ? 'production' : 'development', // Set mode to 'development' or 'production'
        devtool: 'source-map', // Enable source maps for easier debugging
        module: {
            rules: [
                {
                    test: /\.js$/, // Apply this rule to all JavaScript files
                    exclude: /node_modules/, // Exclude node_modules folder
                    use: 'babel-loader', // Transpile JS files using Babel
                },
            ],
        },
        plugins: [
            // This will generate a new index.html and inject the JS file(s)
            new HtmlWebpackPlugin({
                title: isProduction ? 'App (Prod)' : 'App (Dev)',
                template: isProduction ? './index.html' : './index.dev.html', // Path to your index.html template
                filename: 'index.html' // Output file name (in dist folder)
            }),
        ],
    }
};
