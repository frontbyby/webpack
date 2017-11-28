const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
/*module.exports = {
    entry:{"index.js": "./src/index.js"},
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    "csv-loader"
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    "xml-loader"
                ]
            }
        ]
    }
};*/
module.exports = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Output Manangement"
        })
    ],
    devtool: "inline-source-map"
}