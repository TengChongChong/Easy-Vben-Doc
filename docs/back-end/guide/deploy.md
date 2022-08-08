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
如需指定`spring.profiles.active`可在启动命令后添加`--spring.profiles.active=prod`

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