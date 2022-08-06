---
title: 快速上手
---

# 快速上手
本文会帮助你从头启动项目

## 前言

::: tip 关于组件
项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。
:::

## 环境准备
你的本地环境需要安装
- [JDK](https://www.oracle.com/java/technologies/javase-downloads.html 'JDK') 1.8^
- [MySQL](https://www.mysql.com/cn/ 'MySQL') 8.0^
- [Redis](https://redis.io/ 'Redis')
- [Node](http://nodejs.org/ 'Node')
- [Git](https://git-scm.com/ 'Git')

## 工具配置

如果您使用的 IDE 是[WebStorm](https://www.jetbrains.com/zh-cn/webstorm/)的话，无需安装插件

如果您使用的 IDE 是[VSCode](https://code.visualstudio.com/)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备 （也可以选择 Volar）
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

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

### 前端


#### 从 GitHub 获取代码

```shell
$ git clone https://github.com/TengChongChong/Easy-Vben-Admin.git easy-vben-admin
```
:::tip
如果从 GitHub clone 代码较慢的话，可以尝试用从 Gitee 获取代码
```shell
$ git clone https://gitee.com/tcc/Easy-Vben-Admin.git easy-vben-admin
```
:::

#### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v

```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

#### 安装依赖

#### yarn 安装

必须使用 [Yarn](https://github.com/yarnpkg/yarn)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装`yarn`，可以用下面命令来进行全局安装

```bash
# 全局安装yarn
npm i -g yarn
# 验证
yarn -v # 出现对应版本号即代表安装成功
```

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
yarn
```
#### 配置

打开文件`/easy-vben-admin/.env.development`，修改以下配置

```yaml
# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=http://localhost

# 文件上传接口
VITE_GLOB_UPLOAD_URL=http://localhost/api/auth/file/upload

# 项目路径，用于代码生成
VITE_PROJECT_PATH=/Users/tengchong/workspaces/vs-code/easy-vben-admin
```

#### npm script

```bash
"scripts": {
  # 安装依赖
  "bootstrap": "yarn install",
  # 运行项目
  "serve": "npm run dev",
  # 运行项目
  "dev": "vite",
  # 构建项目
  "build": "vite build && esno ./build/script/postBuild.ts",
  # 清空缓存后构建项目
  "build:no-cache": "yarn clean:cache && npm run build",
  # 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看
  "report": "cross-env REPORT=true npm run build",
  # 类型检查
  "type:check": "vue-tsc --noEmit --skipLibCheck",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 直接预览本地 dist 文件目录
  "preview:dist": "vite preview",
  # 生成 ChangeLog
  "log": "conventional-changelog -p angular -i CHANGELOG.md -s",
  # 删除缓存
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
  "clean:lib": "rimraf node_modules",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # 执行 stylelint 格式化
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  # 对打包结果进行 gzip 测试
  "test:gzip": "http-server dist --cors --gzip -c-1",
  # 对打包目录进行 brotli 测试
  "test:br": "http-server dist --cors --brotli -c-1",
  # 重新安装依赖，见下方说明
  "reinstall": "rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
  "install:husky": "is-ci || husky install",
  # 生成图标集，见下方说明
  "gen:icon": "esno ./build/generate/icon/index.ts",
  "postinstall": "npm run install:husky"
},
```
#### 重新安装依赖

该命令会先删除 `node_modules`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。

## 目录说明

```bash

.
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── design # 样式文件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── test # 测试
│   └── server # 测试用到的服务
│       ├── api # 测试服务器
│       ├── upload # 测试上传服务器
│       └── websocket # 测试ws服务器
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件
```