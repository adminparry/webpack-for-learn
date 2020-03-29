# postcss-loader

解析postcss语法

## installed
``` bash
npm install --save-dev
```

## demo

``` javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    
                ]
            }
        ]
    }
}
```