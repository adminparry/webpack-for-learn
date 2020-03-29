# url-loader

将文件转化为base64的格式

## installed

``` bash
npm install url-loader --save-dev
```
## options
``` javascript

limit
{Number}
undefined
限制是否转化
mimetype
{String}
extname
序列化mimetype类型
fallback
{String}
file-loader
当大于限制时使用
```
## demo

``` javascript

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}
```
