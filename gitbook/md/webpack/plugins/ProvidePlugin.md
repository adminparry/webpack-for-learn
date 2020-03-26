# ProvidePlugin

自动加载模块，而不必到处 import 或 require


webpack 自带插件

## demo

``` javascript
const path = require('path');


module.exports = {
    plugin:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            Vue: ['vue/dist/vue.esm.js', 'default']
        }),
    ]
}
```