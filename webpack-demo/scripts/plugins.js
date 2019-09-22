const webpack = require('webpack');
/**
 * https://www.webpackjs.com/plugins/component-webpack-plugin/
 */
// const ComponentPlugin = require("component-webpack-plugin");
/**
 * 
 * npm install --save-dev webpack-bundle-analyzer 
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// npm install --save-dev webpack-manifest-plugin
const ManifestPlugin = require('webpack-manifest-plugin');
// npm install --save-dev clean-webpack-plugin
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

/**
 * npm install --save-dev html-webpack-plugin
 * https://www.webpackjs.com/plugins/html-webpack-plugin/
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
    /**
     * https://www.npmjs.com/package/webpack-bundle-analyzer
     * 依赖关系
     */
    new BundleAnalyzerPlugin(),
    /**
     * https://www.webpackjs.com/plugins/aggressive-splitting-plugin/
     * 将 bundle 拆分成更小的 chunk
     */
    new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 30000, // 字节，分割点。默认：30720
        maxSize: 50000, // 字节，每个文件最大字节。默认：51200
        chunkOverhead: 0, // 默认：0
        entryChunkMultiplicator: 1, // 默认：1
    }),
    /**
     * https://www.webpackjs.com/plugins/banner-plugin/
     * 为每个 chunk 文件头部添加 banner
     */
    new webpack.BannerPlugin({
        banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    }),
    /**
     * https://www.webpackjs.com/plugins/commons-chunk-plugin/
     * 建立一个独立文件(又称作 chunk)的功能
     */
    // new webpack.optimize.CommonsChunkPlugin(options),
    
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(),
    new ManifestPlugin({
        publicPath: '/',
        basePath: '/'
    }),
    new CleanWebpackPlugin(),
]