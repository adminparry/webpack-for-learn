# HotModuleReplacementPlugin

启用模块热替换(Enable Hot Module Replacement - HMR)

webpack 自带插件


## options

``` javascript
// multiStep (boolean)：设置为 true 时，插件会分成两步构建文件。首先编译热加载 chunks，之后再编译剩余的通常的资源。
// fullBuildTimeout (number)：当 multiStep 启用时，表示两步构建之间的延时。
// requestTimeout (number)：下载 manifest 的延时（webpack 3.0.0 后的版本支持）。
```
## demo

``` javascript
const path = require('path');


module.exports = {
    plugin:[
        new webpack.HotModuleReplacementPlugin({

        }),
    ]
}
```