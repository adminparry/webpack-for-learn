# webpack-manifest-plugin

https://github.com/danethurber/webpack-manifest-plugin

生成manifest文件

## install
``` bash

npm install --save-dev webpack-manifest-plugin

```

## demo

``` javascript
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    // ...
    plugins: [
      new ManifestPlugin()
    ]
};

```