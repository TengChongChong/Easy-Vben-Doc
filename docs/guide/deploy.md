---
title: 部署
---

# 部署

## 后端
后端部署有两种方案`Jar`和`War`，二选一。无论选择哪种方案都不建议将配置文件放到项目中。
### Jar

1. 修改 `/easy-vben/easy-api/pom.xml` 中 `packaging` 改为jar
2. 执行 `mvn clean package` 或Maven中执行 `clean` 后 `package`
3. 等待执行结束后会在 `/easy-vben/easy-api/target/` 生成 `easy-api.jar`
4. 启动

```
java -jar easy-api.jar
```
如需指定`spring.profiles.active`可在启动命令后添加`--Dspring.profiles.active=prod`

```
java -jar easy-api.jar --spring.profiles.active=prod
```

::: tip

建议不要将生产环境配置文件放到war包里，使用`spring.config.location`
指定配置文件目录，具体配置方法请参考 [SpringBoot外部化配置文件实践](https://juejin.im/post/5d2ea85b5188253e215ff2a6)
:::

### War

1. 修改 `/easy-vben/easy-api/pom.xml` 中 `packaging` 改为war
2. 执行 `mvn clean package` 或Maven中执行 `clean` 后 `package`
3. 等待执行结束后会在 `/easy-frame/easy-app/target/` 生成 `easy-api.war`
4. 将 `easy-api.war` 部署到Web容器中

> 如需指定`spring.profiles.active`请参考[SpringBoot外部化配置文件实践](https://juejin.im/post/5d2ea85b5188253e215ff2a6)
::: tip

建议不要将生产环境配置文件放到war包里，使用`spring.config.location`
指定配置文件目录，具体配置方法请参考 [SpringBoot外部化配置文件实践](https://juejin.im/post/5d2ea85b5188253e215ff2a6)
:::

## 前端

### 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用。

```
$ vite build && esno ./build/script/postBuild.ts
```

构建打包成功之后，会在根目录生成 `dist` 文件夹， 里面就是构建打包好的文件，通常是 `*.js`、`*.css`、`index.html` 等静态文件， 也包括了项目根的 `public/` 下的所有文件。

### 部署

建议使用 `Nginx` 作为 `Web` 容器，配置和使用相当简单，只要简单的配置就能拥有高性能和高可用。示例配置如下：

```
server {
    listen 80;
    # gzip config
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    root /usr/share/nginx/html;

    location / {
        # 用于配合 browserHistory 使用
        try_files $uri $uri/ /index.html;

        # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 
        # rewrite ^/(.*)$ https://preview.pro.loacg.com/$1 permanent;

    }
    location /api {
        proxy_pass https://preview.pro.loacg.com;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Host              $http_host;
        proxy_set_header   X-Real-IP         $remote_addr;
    }
}
server {
  # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 
  listen 443 ssl http2 default_server;

  # 证书的公私钥
  ssl_certificate /path/to/public.crt;
  ssl_certificate_key /path/to/private.key;

  location / {
        # 用于配合 browserHistory 使用
        try_files $uri $uri/ /index.html;

  }
  location /api {
      proxy_pass https://preview.pro.loacg.com;
      proxy_set_header   X-Forwarded-Proto $scheme;
      proxy_set_header   Host              $http_host;
      proxy_set_header   X-Real-IP         $remote_addr;
  }
}
```
