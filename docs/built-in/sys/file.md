# 文件
系统中文件统一存放在`sys_file`表中，使用`p_id`与`type`与业务关联：
- `p_id` 业务数据id
- `type` 文件类型

## 在业务中使用
### 注入Service
```java
// com.easy.admin.sys.service.SysFileService
@Autowired
private SysFileService sysFileService;
```
### 查询文件
查询文件数据，默认按照`order_no`升序排列
```java
/**
 * 查询文件
 *
 * @param pId 父id
 * @param type 类型
 * @return List<SysFile>
 */
List<SysFile> select(String pId, String type);
```
### 删除文件
删除数据和文件
```java
/**
 * 删除
 *
 * @param pId  父id
 * @param type 类型
 * @return true/false
 */
boolean delete(String pId, String type);
```
### 保存文件
保存文件与数据，如果文件在临时目录将自动复制到正式目录。
```java
/**
 * 保存
 *
 * @param object 表单内容
 * @return List<SysFile>
 */
List<SysFile> saveData(List<SysFile> object);
```
