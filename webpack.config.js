var path = require('path');

var config = {
    entry: "./app/Bootstrap.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "App.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, "/node_modules"),
                use: [{
                    loader: "ts-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}

module.exports = config;