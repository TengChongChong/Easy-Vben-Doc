---
title: 常见问题
---

# 常见问题

## 获取当前登录用户

```java
com.easy.admin.util.ShiroUtil.getCurrentUser();
```

## 登录时错误次数太多被锁定

删除Redis中 `account:login_count_{用户名}`

## 添加字典页面未生效

请到系统管理 > 系统设置 > 字典管理页面点击生成静态文件
::: tip 如依然无效请清除浏览器缓存或者修改版本号使浏览器缓存失效
:::

## 上传的文件丢失

- 文件放在临时目录下，在 `com.easy.admin.task.CleanTemporaryFile`
  中定时清理了临时目录的文件，请在用户保存后使用 `FileUtil.moveToFormal(path)` 将文件移动到正式目录下

## 添加模块

以Idea为例

-
    1. 选择`New Module`，选择创建`Maven`模块并点击`Next`
-
    2. 选择`Parent（默认为Easy Vben）`，填写`Name`点击`Finish`
-
    3. 打开新建模块中的`pom.xml`文件添加以下内容

```xml
<packaging>jar</packaging>

<description>这里是模块说明</description>

<dependencies>
<!-- 系统模块，如不需要可去掉 -->
<dependency>
    <groupId>com.easy.admin</groupId>
    <artifactId>easy-sys</artifactId>
</dependency>
</dependencies>

<build>
<resources>
    <resource>
        <directory>src/main/java</directory>
        <includes>
            <include>**/*.xml</include>
        </includes>
    </resource>
</resources>
</build>
```

-
    4. 打开`/easy-vben/pom.xml`，在`dependencyManagement > dependencies`添加以下内容

```xml
<dependency>
    <groupId>com.easy.admin</groupId>
    <!-- easy-xxx 请替换为实际名称 -->
    <artifactId>easy-xxx</artifactId>
    <version>${project.version}</version>
</dependency>
```

-
    5. 打开`/easy-vben/easy-api/pom.xml`，在`dependencies`添加以下内容
```xml
<dependency>
    <groupId>com.easy.admin</groupId>
    <!-- easy-xxx 请替换为实际名称 -->
    <artifactId>easy-xxx</artifactId>
</dependency>
```

## 其他

其他问题请提
[Issues](https://gitee.com/tcc/easy-vben/issues)
