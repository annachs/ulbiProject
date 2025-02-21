import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        // template берет за основу для создания build/index.html файл public/index.html
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // для ускорения сборки больших проектов
        // для того, чтобы в bundle был отдельный файл css, а не все в main.js
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin({ overlay: false }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
