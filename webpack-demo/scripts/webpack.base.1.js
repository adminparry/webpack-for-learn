const webpack = require('webpack');
const path = require('path');
const plugins = require('./plugins');
var glob = require('glob');

const entry_path = path.resolve(__dirname, '../entry/**/*.js');
const output_path = path.resolve(__dirname, '../output1/js');

const multi_entry = glob.sync(entry_path).reduce((ret, item)=> {
    const fdName = item.split('/').splice(-2).join('-');
    const key = fdName.substr(0, fdName.lastIndexOf('.'));
    ret[key] = item;
    return ret;
},{});


console.log(multi_entry);

const config = {
    cache: true, // better performance for the AggressiveSplittingPlugin
    /**
     * 构建记录
     *  */
    recordsOutputPath: path.join(__dirname, "dist", "records.json"),
    /**
     * https://www.webpackjs.com/plugins/split-chunks-plugin/
     */
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    mode: 'production',
    entry: multi_entry,
    output: {
        path: output_path,
        // can use [name] [id] [hash:number]
        filename: '[name].js'
    },
    plugins
}

const compiler = webpack(config);

compiler.run((err, stats) => {
    console.log(stats)
});