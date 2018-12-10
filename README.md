# url.js

## 使用方法
```
//安装dmy-url
npm install dmy-url

//引入主对象
import Url from 'dmy-url';

//使用jsonp
var urlObj = Url.parse(url);
```

## urlObj属性说明
+ protocol: 协议
+ host: 主机
+ port: 端口
+ path: 路径
+ query: 查询参数

## 使用实例
```
var obj = Url.parse('https://employer.58.com/resumerecommend?infoid=2');
console.log(obj);
{
    protocol: 'https',
    host: 'employer.58.com',
    port: 80,
    path: /resumerecommend,
    query: {
        infoid: 2
    }
}
```