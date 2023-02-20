import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { json } from "stream/consumers";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins ({paths, isDev} : BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}