---
title: 多数据源
---

# 多数据源
集成 [Dynamic-Datasource](https://github.com/baomidou/dynamic-datasource-spring-boot-starter 'Dynamic-Datasource') 
支持多数据源，适用于多种场景、纯粹多库、读写分离、一主多从、混合模式。支持项目启动后动态增加移除数据源。

- 在`数据源管理`中配置数据源
![数据源管理](/assets/images/sys/data-source.png)
- 使用 `@DS` 切换数据源
  `@DS` 可以注解在方法上或类上，同时存在就近原则 `方法上注解` 优先于 `类上注解`。

```java
@Service
@DS("slave")
public class UserServiceImpl implements UserService {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List selectAll() {
    // ...
  }
  
  @Override
  @DS("slave_1")
  public List selectByCondition() {
    // ...
  }
} 
```
