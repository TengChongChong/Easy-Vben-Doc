---
title: 开始
---

# 开始
本文会帮助你从头启动项目

## 环境准备
你的本地环境需要安装
- [JDK](https://www.oracle.com/java/technologies/javase-downloads.html 'JDK') 1.8^
- [MySQL](https://www.mysql.com/cn/ 'MySQL') 8.0^
- [Redis](https://redis.io/ 'Redis')
- [Git](https://git-scm.com/ 'Git')

## 代码获取

::: warning 注意
注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。
:::

### 后端

#### 从 GitHub 获取代码

```shell
$ git clone https://github.com/TengChongChong/Easy-Vben.git easy-vben
```
:::tip
如果从 GitHub clone 代码较慢的话，可以尝试用从 Gitee 获取代码
```shell
$ git clone https://gitee.com/tcc/Easy-Vben.git easy-vben
```
:::

### 目录结构

```
├── db                   # Sql脚本
│   ├── activiti         # 工作流
│   ├── easy-vben.sql   # 基础 sql
│   ├── easy-cms.sql     # CMS sql
│   └── quartz.sql       # 定时任务
├── easy-activiti        # 工作流
├── easy-api             # 入口
├── easy-cms             # CMS
├── easy-common          # 工具
│   ├── easy-core        # 基础
│   ├── easy-mybatis     # MyBatis
│   └── easy-redis       # Redis
├── easy-file            # 文件
├── easy-generator       # 代码生成
├── easy-sample          # 示例
├── easy-scheduler       # 定时任务
└── easy-sys             # 系统
```

### 创建数据库

- 创建数据库并执行`/easy-vben/db/easy-vben.sql`初始化表
- 如需使用CMS功能执行`/easy-vben/db/easy-cms.sql`初始化表
- 执行`/easy-vben/db/activiti/*`创建工作流表
- 执行`/easy-vben/db/quartz.sql`创建定时任务表

### 配置数据源&Redis

打开`/easy-vben/easy-api/src/main/resources/application-dev.yml`文件，修改`Redis`与`数据源`配置。 如果你使用默认的参数安装的`Redis`和`MySQL`
只需修改`spring.datasource.password`即可。

```yaml {19}
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
  # 数据源，集成多数据源，此处仅需配置主数据源
  datasource:
    dynamic:
      datasource:
        master:
          url: jdbc:mysql://localhost:3306/easy-vben?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowMulQueries=true&allowMultiQueries=true&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullDatabaseMeansCurrent=true&useInformationSchema=true
          username: root
          password: xxx
```
多数据源配置请参考[多数据源配置](xxx, '多数据源配置') 
### 配置上传的文件存放路径

打开`/easy-vben/easy-api/src/main/resources/application-dev.yml`文件，修改文件存放路径

```yaml {3}
project:
  # 文件上传路径(不要写以~开头的路径会导致无法访问)
  file-upload-path: /Users/tengchong/development/easy-vben
```

:::tip 此路径会被添加为静态资源映射地址
:::

### 启动服务

执行`com.easy.admin.Application`启动服务