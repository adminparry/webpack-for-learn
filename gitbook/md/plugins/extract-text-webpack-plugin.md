# extract-text-webpack-plugin

https://www.npmjs.com/package/extract-text-webpack-plugin

从 bundle 中提取文本（CSS）到单独的文件

``` bash
npm install --save-dev extract-text-webpack-plugin
```

## demo

``` javascript

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css"),
    ]

}
```