# RedisUtil
操作Redis中数据
## set(key, val)
```java
/**
 * 保存到redis
 * 默认过期时间 30 分钟
 *
 * @param key 键
 * @param val 值
 */
public static void set(String key, Object val)
```
## set(key, val, expire)
```java
/**
 * 保存到redis
 *
 * @param key    键
 * @param val    值
 * @param expire 过期时间 单位: 秒
 */
public static void set(String key, Object val, long expire)
```
## get(key)
```java
/**
 * 根据key从redis获取值
 *
 * @param key 键
 * @return Object
 */
public static Object get(String key)
```
## del(key)
```java
/**
 * 根据key从redis删除值
 *
 * @param key 键
 */
public static void del(String key)
```
## delByPrefix(keyPrefix)
```java
/**
 * 根据前缀删除redis中的内容
 *
 * @param keyPrefix 前缀
 */
public static void delByPrefix(String keyPrefix)
```
## selectKeysByPrefix(keyPrefix)
```java
/**
 * 根据前缀获取key列表
 *
 * @param keyPrefix key前缀
 * @return Set<String>
 */
public static Set<String> selectKeysByPrefix(String keyPrefix)
```
## setExpire(key, expire)
```java
/**
 * 根据key设置缓存过期时间
 *
 * @param key    键
 * @param expire 过期时间 单位: 秒
 */
public static void setExpire(String key, long expire)
```
## increment(key, increment)
```java
/**
 * 递增
 *
 * @param key
 * @param increment 递增数
 */
public static void increment(String key, int increment)
```
## hasKey(key)
```java
/**
 * redis中是否有指定key
 *
 * @param key
 * @return true/false
 */
public static boolean hasKey(String key)
```
## getExpire(key)
```java
/**
 * 获取指定key有效期剩余时间
 *
 * @param key
 * @return
 */
public static long getExpire(String key)
```

