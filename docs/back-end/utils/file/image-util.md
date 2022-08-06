# ImageUtil
图片一些常用的方法，如生成缩略图、根据path获取访问地址等

## isImage(file)
```java
/**
 * 根据文件头判断文件是否是图片
 * 注:方法未做文件是否存在验证
 *
 * @param file 文件
 * @return true/false
 */
public static boolean isImage(File file)
```
## generateThumbnail(file)
```java
/**
 * 生成缩略图
 *
 * @param file 原图
 * @return true/false
 */
public static boolean generateThumbnail(File file)
```
## generateThumbnail(file, size)
```java
/**
 * 生成指定尺寸的缩略图
 *
 * @param file 原图
 * @param size 缩放后尺寸
 * @return 缩略图路径
 */
public static String generateThumbnail(File file, int size)
```
## delThumbnail(file)
```java
/**
 * 删除缩略图
 *
 * @param file 原图
 * @return true/false
 */
public static boolean delThumbnail(File file)
```
## delThumbnail(file, size)
```java
/**
 * 删除缩略图
 *
 * @param file 原图
 * @param size 缩略图尺寸
 * @return true/false
 */
public static boolean delThumbnail(File file, int size)
```
## getThumbnailName(fileName, size)
```java
/**
 * 获取缩略图名称
 *
 * @param fileName 文件名称
 * @param size     尺寸
 * @return 缩略图名称
 */
private static String getThumbnailName(String fileName, int size)
```
## getThumbnailPath(path, size)
```java
/**
 * 根据原图路径获取缩略图path
 *
 * @param path 文件路径
 * @param size 尺寸
 * @return 缩略图路径
 */
public static String getThumbnailPath(String path, int size)
```
## getThumbnailUrl(path, size)
```java
/**
 * 根据原图路径获取缩略图url
 *
 * @param path 文件路径
 * @param size 尺寸
 * @return 缩略图url
 */
public static String getThumbnailUrl(String path, int size)
```
## getThumbnailPathByUrl(url, size)
```java
/**
 * 根据原图url获取指定缩略图路径
 *
 * @param url  url
 * @param size 尺寸
 * @return 缩略图路径
 */
public static String getThumbnailPathByUrl(String url, int size)
```
## getThumbnailUrlByUrl(url, size)
```java
/**
 * 根据原图url获取缩略图url
 *
 * @param url  url
 * @param size 尺寸
 * @return 缩略图url
 */
public static String getThumbnailUrlByUrl(String url, int size)
```