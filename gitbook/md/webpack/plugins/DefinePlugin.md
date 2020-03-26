# DefinePlugin

允许在编译时(compile time)配置的全局常量

webpack 自带插件

## demo

``` javascript
const path = require('path');


module.exports = {
    plugin:[
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
    ]
}
```