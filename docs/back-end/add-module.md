---
title: 添加模块
---

# 添加模块

以Idea为例

-
    1. 选择`New Module`，选择创建`Maven`模块并点击`Next`
<div align="center" style="margin: 12px 0">
  ![New Module](/assets/images/idea/new-module-1.png)
</div>

-
    2. 选择`Parent（默认为Easy Vben）`，填写`Name`点击`Finish`
<div align="center" style="margin: 12px 0">
   ![New Module](/assets/images/idea/new-module-2.png)
</div>

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
