---
title: 字典
---

# 字典
用于管理业务系统中常用的字典，如性别、学历、类型等。
系统启动时会将字典生成`sys-dict.js`文件，以减轻后端压力，并封装了以下前端组件：
- [EDictCheckbox 字典多选](/front-end/components/data-entry/dict-checkbox.html 'EDictCheckbox 字典多选')
- [EDictRadio 字典单选](front-end/components/data-entry/dict-radio.html 'EDictRadio 字典单选')
- [EDictSelect 字典下拉](/front-end/components/data-entry/dict-select.html 'EDictSelect 字典下拉')
- [EDictTag 字典标签](/front-end/components/data-display/dict-tag.html 'EDictTag 字典标签')

![字典管理](/assets/images/sys/sys-dict.png)
::: tip

- 系统启动后会根据数据库中 `sys_dict` 生成 `sys-dict.js` 文件，文件放在`${project.file-upload-path}/data/sys-dict.js`目录下，页面中使用到的字典数据会从该js中获取。
- 修改字典后请点击页面中的 `生成静态文件` 重新生成 `sys-dict.js`
  :::
