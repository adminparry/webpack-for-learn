# ProgressPlugin

在控制台输出打包进度


webpack 自带插件

## demo

``` javascript
const path = require('path');


module.exports = {
    plugin:[
        new webpack.ProgressPlugin(),
    ]
}
```