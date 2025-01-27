const path = require('path');

module.exports = {
    entry: './index.js', // Entry point for your application
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Set mode to 'development' or 'production'
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
};
