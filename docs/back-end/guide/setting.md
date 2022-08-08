---
title: 配置
---

# 配置

## 数据源

`/easy-vben/easy-api/src/main/resources/application-xx.yml`

```yaml
spring:
  # 数据源
  datasource:
    dynamic:
      datasource:
        master:
          url: jdbc:mysql://localhost:3306/easy-vben?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowMulQueries=true&allowMultiQueries=true&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullDatabaseMeansCurrent=true&useInformationSchema=true
          username: root
          password: xxx
```

## Redis

`/easy-vben/easy-api/src/main/resources/application-xx.yml`

```yaml
spring:
  # Redis
  redis:
    # 数据库索引（默认为0）
    database: 0
    # 服务器地址
    host: 127.0.0.1
    # 服务器连接端口
    port: 6379
    # 服务器连接密码（默认为空）
    password:
    jedis:
      pool:
        # 连接池最大连接数（使用负值表示没有限制）
        max-active: 8
        # 连接池最大阻塞等待时间（使用负值表示没有限制）
        max-wait: -1
        # 连接池中的最大空闲连接
        max-idle: 8
        # 连接池中的最小空闲连接
        min-idle: 0
    # 连接超时时间 单位: 秒
    timeout: 10
    # 默认的数据过期时间 30 分钟 单位: 秒
    expire: 1800
```

## 线程池

`/easy-vben/easy-api/src/main/resources/application-xx.yml`

```yaml
async:
  executor:
    thread:
      # 配置核心线程数
      core-pool-size: 5
      # 配置最大线程数
      max-pool-size: 5
      # 配置队列大小
      queue-capacity: 999
      # 配置线程池中的线程的名称前缀
      name-prefix: async-
      # 配置线程最大空闲时间 s
      keep-alive-seconds: 30
```

## 项目配置

`/easy-vben/easy-api/src/main/resources/application-xx.yml`

```yaml
project:
  # 版本号
  version: 0.5.0
  # 项目访问url
  url: http://127.0.0.1
  # 前端访问url
  front-end-url: http://localhost:3100
  # 文件上传路径(不要写以~开头的路径会导致无法访问)
  file-upload-path: /Users/tengchong/development/easy-vben
```
