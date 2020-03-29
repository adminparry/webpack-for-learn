# less-loader

解析less语法

## installed

``` bash
npm install --save-dev less-loader
```

## demo

``` javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                 use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
}
```