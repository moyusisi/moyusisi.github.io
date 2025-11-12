---
title: MacOS使用HomeBrew安装Redis
date: 2024-11-21
category: Mac
tag: [HomeBrew]
order: -20241121
---

## 更新Homebrew

```bash
brew update
```

## 安装Redis

```bash
brew install redis
```

## 启动redis服务
默认端口号为 6379


```bash
# 后台启动
brew services start redis
# 前台启动
redis-server
# 重启
brew services restart redis
# 关闭
brew services stop redis
# 命令关闭
redis-cli shutdown
```

## 测试Redis

```bash
redis-cli ping
```
如果Redis已正确安装并正在运行，你会看到回复 "PONG"。

## 设置Redis密码

Redis的配置文件位于`/usr/local/etc/redis.conf`  
默认无需用户名密码即可连接，若要设置密码，打开的配置文件，找到`# requirepass foobared`这一行将其修改为：

```bash
requirepass your_password
```

## 使用redis
要使用Redis客户端连接到服务器并验证密码，可以执行以下命令：

```bash
redis-cli
```
在Redis命令行提示符下，输入`AUTH your_password`并按下回车键

* 命令行客户端 [Redis CLI](https://redis.io/docs/latest/develop/tools/cli/)

