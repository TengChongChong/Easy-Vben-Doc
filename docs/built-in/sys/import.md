# 导入
## 简介
配置模版后使用excel批量导入数据到系统中，并提供回调函数校验或处理导入后数据。
## 导入模版
![导入模版](/assets/images/sys/import/step-1.png)
## 添加模版
点击`新增`按钮添加导入模版
![导入模版](/assets/images/sys/import/step-2.png)
## 配置模版
点击操作列`导入配置`配置按钮设置导入规则
![导入模版](/assets/images/sys/import/step-3.png)
## 实现接口
在对应的`XXXServiceImpl`中实现`com.easy.admin.sys.service.ImportService`
```java
/**
 * 验证数据，插入临时表后调用
 * 注: 返回false会触发异常回滚
 *
 * @param templateId 模板id
 * @param userId 用户id
 * @return true/false
 */
@Override
public boolean verificationData(String templateId, String userId) {
    return true;
}

/**
 * 导入前回调，插入正式表之前会调用此方法，建议导入正式表之前使用次方法再次验证数据，防止验证 ~ 导入之间数据发送变动
 * 注: 返回false会触发异常回滚
 *
 * @param templateId 模板id
 * @param userId 用户id
 * @return true/false
 */
@Override
public boolean beforeImport(String templateId, String userId) {
    return verificationData(templateId, userId);
}

/**
 * 导入后回调，插入正式表后会调用此方法
 * 注: 返回false会触发异常回滚
 *
 * @return true/false
 */
@Override
public boolean afterImport() {
    return true;
}
```
## 打开导入页面
使用按钮组件或者跳转到`/sys/import/excel/data/view/{导入模版}`打开导入页面
![导入模版](/assets/images/sys/import/step-4.png)
## 填写数据
下载模版后打开下载的excel，按照模版要求填写数据
<br/>
![导入模版](/assets/images/sys/import/step-5.png)
## 上传并解析
在导入页面上传填写好的模版，并点击下一步
![导入模版](/assets/images/sys/import/step-6.png)
## 保存数据
点击`导入验证通过数据`
![导入模版](/assets/images/sys/import/step-7.jpeg)


