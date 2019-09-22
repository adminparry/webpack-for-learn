# html-webpack-plugin

``` bash
npm install html-webpack-plugin --save-dev
```

## example

``` javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
        title: 'Development'
      })
    ]
}
```