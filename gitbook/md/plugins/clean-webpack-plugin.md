# clean-webpack-plugin

https://www.npmjs.com/package/clean-webpack-plugin

每次构建之前去清理上一次构建的产物

``` bash
npm install clean-webpack-plugin --save-dev
```

## demo

``` javascript

const { CleanWebpackPlugin } = require('clear-webpack-plugin');

module.exports = {
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]

}
```