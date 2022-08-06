---
title: 自定义注解
---

# 自定义注解

## @SysLog

`com.easy.admin.core.annotation.SysLog`  
用于记录日志，用法请查看[日志](/back-end/sys/log.html)

## @ResponseResult

`com.easy.admin.core.annotation.ResponseResult`  
用于标记 `Controller` 或 `Method` 返回的数据需要使用 `com.easy.admin.common.core.util.Response`包装。可以添加在`Controller` 或 `Method`上。

```java {2}
@RestController
@ResponseResult
public class SampleGeneralController {

}
```

```java {10}
@RestController
public class SampleGeneralController {
  /**
   * 列表
   *
   * @param object 查询条件
   * @return Page<SampleGeneral>
   */
  @GetMapping()
  @ResponseResult
  public Page<SampleGeneral> select(SampleGeneral object, Page<SampleGeneral> page){
      return service.select(object, page);
  }
}
```

```json
// 上面的方法实际返回数据为
{
    "success": true,
    "data": {
        // 方法返回的数据 略...
    },
    "timeStamp": 1613959512091
}
```





