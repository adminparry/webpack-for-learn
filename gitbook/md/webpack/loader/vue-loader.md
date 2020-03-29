# vue-loader

单一vue组件文件调用

## installed

``` bash
npm install --save-dev vue-loader vue-template-compiler
```

## demo
``` javascript
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
```