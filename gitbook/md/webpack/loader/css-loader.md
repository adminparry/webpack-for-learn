# css-loader

解析css类型

## installed

``` bash
npm install --save-dev css-loader
```

## demo

``` javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    
                ]
            }
        ]
    }
}
```