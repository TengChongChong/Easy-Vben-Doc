# SysConfigUtil
系统参数工具

## get(key)
```java
/**
 * 根据key获取系统参数的value
 *
 * @param key key
 * @return value
 */
public static Object get(String key)
```
## getProjectName()
```java
/**
 * 获取项目名称
 *
 * @return 名称
 */
public static String getProjectName()
```
## transferType(config)
```java
/**
 * 转换为config指定类型
 *
 * @param config 系统参数
 * @return value
 */
private static Object transferType(SysConfig config)
```