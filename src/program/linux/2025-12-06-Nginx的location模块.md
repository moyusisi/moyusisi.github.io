---
title: Nginx的location模块
date: 2025-12-06
category: Web
tag: [Nginx]
order: -20251206
---

Nginx的location模块主要用于配置server中的URL匹配

## 匹配规则

### 基础匹配
`location / { ... }`：这是最基本的匹配，匹配所有请求。因为它没有指定具体的文件或目录，所以通常作为后备选项出现。

### 精确匹配
`location = /exact/path { ... }`：精确匹配这个路径。如果请求的 URI 完全等于/exact/path，则使用这个location块的配置处理此请求。

### 前缀匹配
* `location /prefix/ { ... }`：前缀匹配请求的 URI 的开始部分。如果请求的 URI 以/prefix/开始，这个location块将被用来处理请求。
* `location ^~ /prefix/ { ... }`：前缀匹配，但它会阻断正则表达式匹配，即使正则表达式可能会更具体匹配。如果该location匹配，Nginx 不会考虑之后的正则location块。

### 正则表达式匹配
正则表达式匹配会在普通字符串前缀匹配后进行。如果有多个正则表达式location都匹配请求，则使用第一个匹配的location块。

* `location ~ /regex/ { ... }`：大小写敏感的正则匹配。
* `location ~* /regex/ { ... }`：大小写不敏感的正则匹配。

## 优先级顺序

Nginx 处理请求时 location 匹配的优先级顺序如下：

* 先进行精确匹配`location =`
* 其次按文件中出现顺序匹配所有正则表达式`location ~`和`location ~*`
* 然后进行最长的前缀匹配`location ^~`
* 最后是通常的前缀匹配`location /prefix/`
* 如果前面的匹配都没有找到，就使用默认的location /

## proxy_pass
`proxy_pass`是`nginx`中用于反向代理的核心指令，它允许nginx将客户端的请求转发到后端服务器，并将响应返回给客户端。

`proxy_pass`的使用方式有两种，分别为`请求转发`和`路径替换`

### 请求转发
`proxy_pass`中仅包含`协议://主机名:端口`，除此之外不包含任何路径(如`/`)，此时会将匹配到的请求转发。

~~~sh
  # 请求路径为：http://127.0.0.1:8080/api/getUser
  # 实际访问为：http://127.0.0.1:8000/api/getUser
  location ^~/api/ {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $http_host;           # 后台可以获取到完整的ip+端口号
    proxy_set_header X-Real-IP $remote_addr;    # 后台可以获取到用户访问的真实ip地址
  }
~~~

### 路径替换
`proxy_pass`中包含`协议://主机名:端口`之外，还包含路径(如`/`、`/api`)，此时会将匹配到的请求转发之外，还会将匹配路径进行替换改写。

~~~sh
  # 请求路径为：http://127.0.0.1:8080/api/getUser
  # 实际访问为：http://127.0.0.1:8000/user/getUser
  location ^~/api {
    proxy_pass http://127.0.0.1:8000/user;
  }
~~~


## root和alias
`root`和`alias`都是Nginx中用于指定静态资源路径的指令，但它们在处理请求路径时有所不同。

* `root`指令会将请求路径拼接到`root`指令指定的路径后面，有些像请求转发。
* `alias`指令会将请求匹配路径替换为`alias`指令指定的路径，有些像路径替换。

~~~sh
server {
  listen 80;
  server_name localhost;
 
  # 用root方式，location中的路径会拼加到root的地址后面
  # 请求路径为：http://localhost:8080/files/index.jpg    
  # 实际访问为：http://localhost:8080/home/files/index.jpg
  location ~^/files/ {
    root /home/;
    index index.html index.htm;
  }
  # 用alias方式，location中的路径不会拼加到alias的地址后面
  # 请求路径为：http://localhost:8080/files/index.jpg    
  # 实际访问为：http://localhost:8080/home/index.jpg
  location ~^/files/ {
    alias /home/;
    index index.html index.htm;
  }
}
~~~
