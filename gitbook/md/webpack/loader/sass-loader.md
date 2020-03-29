# sass-loader

## installed
``` bash
npm install --save-dev sass-loader node-sass
```
## demo 
``` javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    }
}
```