# html-webpack-plugin

javascript着陆html

``` bash
npm install html-webpack-plugin --save-dev
```

## example

``` javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
        title: 'Development',
        inject: 'false',
        template: path.resolve(__dirname, '../index.html')
      })
    ]
}
```