# 日志
记录操作或访问日志，将保存每次调用方法时的所属模块、方法、ip、url、uri、class、参数、操作人、操作时间信息

## 日志注解
在需要记录日志的方法上添加 `@SysLog`注解，包路径`com.easy.admin.core.annotation.SysLog`，参数如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modular | 模块名 | String | ""
| method | 方法名 | String | ""
## 示例
```java
@SysLog(modular = "sys", method = "用户登录")
```
## 查看日志
可以在`系统监控` > `访问日志`中查看日志记录
### 列表
![列表页](/assets/images/sys/log/list.png)
### 详情
![详情页](/assets/images/sys/log/input.png)
