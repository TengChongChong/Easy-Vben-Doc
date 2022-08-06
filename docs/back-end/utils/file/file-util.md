# FileUtil
为了清理用户上传了文件但是为保存产生的垃圾文件，所以文件上传后默认放到临时目录，保存后移动到正式目录

## getTemporaryPath()
```java
/**
 * 获取临时文件存放路径
 *
 * @return 临时路径/yyyy/mm/dd/
 */
public static String getTemporaryPath()
```
## moveToFormal(path)
```java
/**
 * 将临时目录下的文件移动到正式目录
 *
 * @param path 文件路径
 * @return 新路径
 */
public static String moveToFormal(String path)
```
## getUrl(path)
```java
/**
 * 根据path获取访问url
 *
 * @param path 文件路径
 * @return url
 */
public static String getUrl(String path)
```
## getPath(url)
```java
/**
 * 根据访问url获取path
 *
 * @param url url
 * @return path
 */
public static String getPath(String url)
```
## del(url)
```java
/**
 * 根据正式路径下的文件访问url删除
 *
 * @param url url
 * @return true/false
 */
public static boolean del(String url)
```
## delByPath(path)
```java
/**
 * 根据文件路径删除
 *
 * @param path 路径
 * @return true/false
 */
public static boolean delByPath(String path)
```