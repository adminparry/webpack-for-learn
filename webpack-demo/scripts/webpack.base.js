const webpack = require('webpack');
const path = require('path');
const plugins = require('./plugins');

const entry_path = path.resolve(__dirname, '../entry/entry.js');
const output_path = path.resolve(__dirname, '../output');

const config = {
    entry: {
        app:entry_path
    },
    output: {
        path: output_path,
        // can use [name] [id] [hash:number]
        filename: '[name].js'
    },
    plugins
}

const compiler = webpack(config);

/**
 * when you are use webpack 3.x 
 * compiler.apply(new webpack.ProgressPlugin())
 */
new webpack.ProgressPlugin().apply(compiler);
compiler.run((err, stats) => {
    console.log(stats)
});