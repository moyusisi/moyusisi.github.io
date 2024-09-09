---
title: Dockerfile构建镜像
date: 2024-07-07
category: Linux
tag: [Docker]
order: -20240707
---


## Dockerfile介绍
构建Docker镜像最常用的方式，就是使用 Dockerfile构建。  

```bash
# 默认查找当前目录的 Dockerfile 作为构建输入
docker build
# 通过 -f 指定 Dockerfile
docker build -f ./ Dockerfile
```
Dockerfile是一个文本文件，用于定义Docker镜像的构建过程。它包含了一系列指令，每个指令构建镜像的一层，从基础镜像开始，通过添加文件、运行命令等方式，最终构建出一个完整的镜像。

Dockerfile通常包含四个主要部分：基础镜像信息（使用FROM关键字指定）、维护者信息（使用MAINTAINER或LABEL关键字添加作者信息）、镜像操作指令（如RUN、COPY、ADD、ENV等，用于定制镜像）、容器启动指令（CMD和ENTRYPOINT用于指定容器启动时的行为）。
* 指令按照从上到下的顺序执行。为了指定基本映像，第一条指令必须是 FROM。
* 每条保留字指令都必须是大写字母, 并且后面要跟随至少一个参数
* 每条指令可用 # 添加注释
* 每条指令都会创建一个新镜像层, 并对镜像进行提交

## Dockerfile的保留字指令
主要的保留字指令有：FROM、RUN、ADD、COPY、WORKDIR、CMD等  
[Dockerfile支持的指令](https://docs.docker.com/reference/dockerfile/)如下：

|     | 指令          | 含义                                                                            |
| --- | :------------ | :------------------------------------------------------------------------------ |
| 1   | `ADD`         | **构建**时添加文件到镜像中。tar类型文件会自动解压(网络压缩资源不会被解压)       |
| 2   | `ARG`         | 用于指定**构建**时的变量。                                                      |
| 3   | `CMD`         | 指定在docker run时的默认命令。存在多个则仅最后一个生效                          |
| 4   | `COPY`        | **构建**时复制文件到镜像中。功能类似ADD，但不会自动解压文件，也不能访问网络资源 |
| 5   | `ENTRYPOINT`  | 指定默认可执行的命令。                                                          |
| 6   | `ENV`         | 设置环境变量                                                                    |
| 7   | `EXPOSE`      | 描述程序监听的端口。指定容器与外界交互的端口                                    |
| 8   | `FROM`        | 指定基础镜像。必须为第一个命令                                                  |
| 9   | `HEALTHCHECK` | 检测容器健康状态                                                                |
| 10  | `LABEL`       | 为镜像添加元数据                                                                |
| 11  | `MAINTAINER`  | 指定镜像作者。已过时，推荐使用LABEL。                                           |
| 12  | `ONBUILD`     | 指定镜像**构建**时的指令                                                        |
| 13  | `RUN`         | **构建**镜像时执行的命令                                                        |
| 14  | `SHELL`       | 设置镜像的默认shell                                                             |
| 15  | `STOPSIGNAL`  | 指定退出容器的系统调用信号                                                      |
| 16  | `USER`        | 设置用户身份。                                                                  |
| 17  | `VOLUME`      | 创建挂载数据卷                                                                  |
| 18  | `WORKDIR`     | 改变工作目录。类似于cd命令                                                      |

## 指令详解

### FROM: 基础镜像

```bash
# 语法
FROM <image>[:<tag>] [AS <name>]
# tag可选，默认是latest版本
```
* 通过`FROM`指定的镜像名称必须是一个已经存在的镜像，这个镜像称为基础镜像，必须位于第一条非注释指令
* AS 是可选的，通常用于多阶段构建（有利于减少镜像大小）
* 可通过`--from other_name`使用，例如`COPY --from other_name`

### LABEL: 镜像描述信息

```bash
# 语法
LABEL <key>=<value> <key>=<value> ...

# 例如
LABEL author="xxx <test@qq.com>" describe="test image"
```
* `LABEL`指令用来给镜像以键值对的形式添加一些元数据信息
* 可以替代`MAINTAINER`指令
* 会集成基础镜像中的LABEL，key相同会被覆盖

### COPY: 复制文件到镜像中
不会自动解压
```bash
# 语法1
COPY <src> ... <dest>
# 语法2 适用于文件路径包含空格的情况
COPY ["<src>", ... "<dest>"] 

# 拷贝一个文件
COPY testFile /opt/
# 拷贝一个目录
COPY testDir /opt/testDir
```
* `<src>`表示要复制的源文件或目录，支持通配符
* 若`<src>`是目录，其内部的文件和子目录都会递归复制，但`<src>`目录本身不会被复制
* 若`<src>`是多个或使用了**通配符**，则`<dest>`必须是以`/`结尾的目录
* 若`<dest>`不存在则会自动创建，其父目录路径也会被创建

### ADD: 添加文件到镜像中
类似于`COPY`指令，但`ADD`包含了tar的解压功能，支持tar文件和URL路径。

```bash
# 语法
ADD <src> ... <dest>
# 语法 适用于文件路径包含空格的情况
ADD ["<src>", ... "<dest>"] 

# 拷贝一个文件
COPY testFile /opt/
# 拷贝一个目录
COPY testDir /opt/testDir
```

* 若`<src>`是一个压缩文件(tar)，会被解压为一个目录。若是通过URL下载一个文件不会被解压。
* 若`<src>`是多个或使用了**通配符**，则`<dest>`必须是以`/`结尾的目录。

### WORKDIR: 设置工作目录
在容器内部设置当前工作目录，类似于cd命令。  
此后`RUN、CMD、ENTRYPOINT、COPY、ADD`等命令都在此目录下进行

```bash
# 语法
WORKDIR /path
```

* `WORKDIR`可以出现多次，其路径也可以为相对路径，相对路径是基于前一个`WORKDIR`路径
* `WORKDIR`也可以调用`ENV`指定的变量

### ENV: 设置环境变量
用于设置镜像中的环境变量

```bash
# 语法
ENV <key>=<value> ...

# 使用变量的方式
$varname
${varname}
${varname:-default value}   # 设置默认值，如果varname未被设置，值为默认值
${varname:+default value}   # 设置默认值；不管值存不存在都使用默认值
```

### USER: 设置启动容器的用户
用于指定镜像是什么用户去运行

```bash
# 语法
USER <user>[:<group>]
```

### RUN: 构建镜像时执行的命令
用于指定构建镜像时运行的命令

```bash
# 语法1 shell 形式
RUN <command> ...
# 语法2 exec 形式
RUN [ "<command>", ... ]

# shell形式
RUN yum install httpd && yum install ftp
# exec形式
RUN ["/bin/bash", "-c", "echo hello world"]
```

* 多条RUN指令可以合并为一条，这样在构建的时候会减少产生中间层镜像
* shell形式默认使用`/bin/sh -c` 执行后面的`command`，可以使用 `&&` 或 `\` 连接多个命令
* exec形式被解析为JSON序列，这意味着必须使用双引号 `""`
* exec形式不会调用shell解析，但exec形式可以运行在不包含shell命令的基础镜像中
* 例如：`RUN ["echo", "$HOME"]` 这样的指令`$HOME`并不会被解析，必须`RUN ["/bin/sh", "-c", "echo $HOME"]`

### EXPOSE: 描述容器内程序监听的端口
使用这个指令的目的是说明容器内应用程序会使用的端口，在运行时还需要使用`-p`参数指定映射端口。这是docker处于安全的目的，不会自动打开端口。

```bash
# 语法
EXPOSE <port> [<port>/<protocol>...]

# 说明监听端口
EXPOSE 80 443/https
EXPOSE 80/http 2379/tcp
# docker run 时还需要-p指定才可以
docker run -p 80 -d nginx
```

### VOLUME: 挂载目录
用于向容器添加数据卷，可以提供共享存储功能

```bash
# 语法
VOLUME ["/data"]

# ["/data"]可以是一个JsonArray ，也可以是多个值
VOLUME /var/log 
VOLUME /var/log /opt
```
* `VOLUME`类似于`docker run -v /host_data /container_data`
* 一般不需要在Dockerfile中写明，且在k8s场景几乎没用

### CMD: 为容器设置默认启动命令
用于提供容器运行的默认命令，如果在`docker run`时指定了运行的命令，则`CMD`命令不会执行。


```bash
# 语法1 shell 形式
CMD command param1 param2
# 语法2 exec 形式
CMD ["executable", "param1", "param2"]
# 语法3 exec 形式，仅设置参数，通常与ENTRYPOINT搭配，指定ENTRYPOINT的默认参数
CMD ["param1","param2"]
```

* 一个Dockerfile只有顺序向下的最后一个CMD生效
* `CMD`运行结束后容器将终止，`CMD`可以被`docker run`后面的命令覆盖
* shell形式进程在容器中的`PID != 1`，这意味着该进程并不能接受到外部传入的停止信号`docker stop`

### ENTRYPOINT: 指定默认程序
用于为容器指定默认运行程序或命令。与CMD类似，但存在区别，主要用于指定启动的父进程，`PID=1`。  

```bash
# 语法1 shell 形式
ENTRYPOINT command param1 param2
# 语法2 exec 形式
ENTRYPOINT ["executable", "param1", "param2"]
```

* `ENTRYPOINT`设置默认命令不会被`docker run`命令行指定的命令覆盖，指定的命令行会被当做参数传递给`ENTRYPOINT`指定的程序。
* 如果想覆盖`ENTRYPOINT`，则需要在`docker run`中指定`--entrypoint`选项
* 一个Dockerfile中可以有多个`ENTRYPOINT`，但只有最后一个生效
* `ENTRYPOINT`主要用于启动父进程，后面跟的参数被当做子进程来启动

### ARG: 指定构建时的变量
指定环境变量用于构建过程

```bash
# 语法
ARG <name>[=<default value>]

ARG test_name
ARG another_name=xxx
```
* `ARG`指令定义的参数，在构建过程以`docker build --build-arg test_name=test`形式赋值
* 若`ARG`中没有设置默认值，构建时将抛出警告：`[Warning] One or more build-args..were not consumed`
* Docker默认存在的`ARG`参数，可以在`--build-arg`时直接使用
  * `HTTP_PROXY`/`http_proxy`/`HTTPS_PROXY`/`https_proxy`/`FTP_PROXY`/`ftp_proxy`/`NO_PROXY`/`no_proxy`

### ONBUILD: 添加触发器
`ONBUILD`可以为镜像添加一个触发器，其参数可以是任意一个Dockerfile指令。  

```bash
# 语法
ONBUILD <INSTRUCTION>

ONBUILD RUN mkdir mydir
ONBUILD COPY index.html /var/www/html
```
* 当一个镜像被用作其他镜像的基础镜像时，这个触发器会被执行。当子镜像被构建时会插入触发器中的指令。

### STOPSINGAL: 设置终止信号
设置停止时要发送给`PID=1`进程的信号，主要的目的是为了让容器内的应用程序在接收到signal之后可以先做一些事情，实现容器的平滑退出，如果不做任何处理，容器将在一段时间之后强制退出，会造成业务的强制中断，这个时间默认是10s。

```bash
# 语法
STOPSIGNAL signal
```

* 默认的停止信号为：SIGTERM，也可以通过`docker run -s`指定

### HEALTHCHECK: 健康检查命令
指定容器健康检查命令。当在一个镜像指定了`HEALTHCHECK`指令后，启动容器初始状态会为`starting`，在`HEALTHCHECK`指令检查成功后变为 `healthy`，如果连续一定次数失败，则会变为`unhealthy`。

```bash
# 语法1
HEALTHCHECK [OPTIONS] CMD command
# 语法2 禁用健康检查
HEALTHCHECK NONE

# 如果执行不成功返回1
HEALTHCHECK --interval=5s --timeout=3s CMD curl -fs http://localhost/ || exit 1
```
* `OPTIONS`选项
  * `--interval=30`：两次健康检查的间隔，默认为 30 秒；
  * `--timeout=30`：健康检查命令运行的超时时间，超过视为失败，默认30秒；
  * `--retries=3`：指定失败多少次视为unhealth，默认3次
* 返回值
  * `0`：成功； `1`：失败； `2`：保留

### SHELL：指定默认shell
`SHELL`指令可以指定`RUN、ENTRYPOINT、CMD`指令的`shell`，Linux中默认为`["/bin/sh", "-c"]`，Windows默认`["cmd", "/S", "/C"]`。  
`SHELL`指令必须用JSON形式书写。  

`SHELL`指令通常在Windows比较有用，因为有两种不同形式的shell：`cmd` 和 `powershell`

```bash
# windows镜像的示例
FROM microsoft/windowsservercore

# Executed as cmd /S /C echo default
RUN echo default
# Executed as cmd /S /C powershell -command Write-Host default
RUN powershell -command Write-Host default

# Executed as powershell -command Write-Host hello
SHELL ["powershell", "-command"]
RUN Write-Host hello

# Executed as cmd /S /C echo hello
SHELL ["cmd", "/S", "/C"]
RUN echo hello
```

## 构建镜像
`docker build` 命令用于使用 Dockerfile 创建镜像。官网：[docker image build](https://docs.docker.com/reference/cli/docker/image/build/)

```bash
# 语法
docker [image] build [OPTIONS] PATH | URL | -

# -t, --tag: 指定镜像的名字及标签，可设置多个标签
docker build -t mycentos:7 .
# -f, --file: 指定要使用的Dockerfile文件
docker build -f /home/Dockerfile -t mycentos:7 .
```

## Dockerfile最佳实践
终极目标：易管理、少漏洞、镜像小、层级少、利用缓存

* 不要安装无效软件包,适当使用`.dockerignore`文件忽略不需要包含在镜像中的文件和目录。
* 应简化镜像中同时运行的进程数。理想状况下，每个镜像应该只有一个进程。
* 最新的Docker只有`RUN、COPY、ADD`创建新层，其他指令创建临时层，不会增加镜像大小。比如`EXPOSE`指令就不会生成新层。
* 多条`RUN`命令可通过连接符连接成一条指令集以减少层数。
* 把变更频率低的编译指令优先构建以便放在镜像底层以有效利用构建缓存。
* 把多行参数按字母排序，可以减少可能出现的重复参数，并且提高可读性。
* 复制文件时，每个文件应独立复制，这确保某个文件变更时，只影响该文件对应的缓存。

## Dockerfile实践

### 1.centos7镜像部署nginx
* 1.先创建一个 `nginx.repo` 文件
```bash
cat > nginx.repo <<EOF
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF
```

* 2.编写 Dockerfile 文件
```bash
# 指定基础镜像（依赖镜像）
FROM centos:7

# 执行一个命令
RUN yum install -y yum-utils

# 将本地文件添加到容器中
ADD nginx.repo /etc/yum.repos.d/nginx.repo

# 更新YUM缓存
RUN yum makecache

# 安装nginx
RUN yum install -y nginx

# 制定容器启动默认执行的命令
CMD nginx -g 'daemon off;'
```

* 3.构建镜像

```bash
docker build -t nginx:v1
```

* 4.查看构建的镜像, 然后运行容器

```bash
docker images
docker run -dit nginx:v1 sh
```

* 5.查看刚实例出的容器, 并进入到容器中

```bash
docker exec -it 容器ID bash
```

* 6.检测 nginx 是否部署成功

```bash
# 出现 html 代码说明部署成功
crul 127.0.0.1
```

### 2.编译安装nginx

* 1.编辑 Dockerfile 文件
```bash
# 指定基础镜像(依赖镜像)
FROM centos:7

# 执行命令
RUN yum install yum-utils wget zlib zlib-devel pcre pcre-devel make gcc gcc-c++
RUN cd /opt && wget http://nginx.org/download/nginx-1.18.0.tar.gz && tar -xvf nginx.1.18.0/ && cd nginx-1.18.0/ && ./configure && make && make install

# 指定进入容器的默认工作目录
WORKDIR /usr/local/nginx/sbin

# 指定容器启动默认执行的命令
CMD ./nginx -g 'daemon off;'
```

* 2.构建镜像

```bash
docker build -t nginx:v2 .
```

* 3.查看是否构建成功, 并运行容器

```bash
docker images
docker run -dit --name my_nginx nginx:v2 sh
```

* 4.查看容器是否启动成功, 并测试 nginx

```bash
# 出现 html 代码说明部署成功
docker exec my_nginx crul 127.0.0.1
```

### 3.制作jdk8镜像
* 1.编辑 Dockerfile 文件

```bash

```