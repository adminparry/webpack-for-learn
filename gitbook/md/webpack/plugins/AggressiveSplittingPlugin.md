# AggressiveSplittingPlugin

将 bundle 拆分成更小的 chunk

webpack 自带插件

## demo

``` javascript
const path = require('path');


module.exports = {
    output: {
        chunkFilename: "[chunkhash].js"
    },
    cache: true, // better performance for the AggressiveSplittingPlugin
    plugin:[
        new webpack.optimize.AggressiveSplittingPlugin({
			minSize: 30000,
			maxSize: 50000
		}),
    ]
}
```