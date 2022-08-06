# ShiroUtil
会话相关工具、主要用来获取用户以及验证用户权限
## getSession
```java
/**
 * 获取当前用户session
 *
 * @return Session
 */
public static Session getSession();
```
## setAttribute(key, value)
```java
/**
 * 将数据放到session中
 * 
 * @param key key
 * @param value value
 */
public static void setAttribute(String key, Object value);
```
## getAttribute(key)
```java
/**
 * 获取session中的数据
 *
 * @param key key
 * @return Object
 */
public static Object getAttribute(Object key);
```
## removeAttribute(key)
```java
/**
 * 获取session中的数据
 *
 * @param key key
 * @return Object
 */
public static Object getAttribute(Object key);
```
## setCurrentUser(sysUser)
```java
/**
 * 设置当前用户
 *
 * @param sysUser 当前用户
 */
public static void setCurrentUser(SysUser sysUser);
```
## getCurrentUser
```java
/**
 * 获取当前用户
 *
 * @return SysUser
 */
public static SysUser getCurrentUser();
```
## removeCurrentUser
```java
/**
 * 删除当前用户
 */
public static void removeCurrentUser();
```