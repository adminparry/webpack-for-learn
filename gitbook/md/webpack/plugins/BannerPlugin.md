# BannerPlugin

在控制台输出打包进度


webpack 自带插件

## options
``` json
{
  banner: string, // 其值为字符串，将作为注释存在
  raw: boolean, // 如果值为 true，将直出，不会被作为注释
  entryOnly: boolean, // 如果值为 true，将只在入口 chunks 文件中添加
  test: string | RegExp | Array,
  include: string | RegExp | Array,
  exclude: string | RegExp | Array,
}
```
## demo

``` javascript
const path = require('path');


module.exports = {
    plugin:[
        new webpack.BannerPlugin({
            banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
        })  
    ]
}
```