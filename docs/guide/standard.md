---
title: 约定
---

# 约定
## 后端
### 编码规范
后端开发请遵循 [开发规范](/back-end/standard/前言.html '开发规范')，
建议Idea安装代码检查 `Alibaba Java Coding Guidelines` 插件，[使用方法](https://github.com/alibaba/Alibaba-Java-Coding-Guidelines '使用方法')。
### 约定
为统一后端返回给前端的数据格式，方便前端做统一错误处理，`Controller`统一使用自定义注解 [@ResponseResult](/back-end/annotation.html#responseresult) 对后端返回数据进行包装，
以统一数据格式。
```typescript
{
    success: boolean; // 是否成功
    timeStamp: number; // 时间戳
    data?: any; // 响应数据
    errorCode?: string; // 错误码
    errorMessage?: string; // 错误信息
    showType?: number; // 错误显示方式：0 静默 ； 1 notification.info; 2 notification.warning; 3 notification.error; 9 page
    traceId?: string; // 方便后端故障排除：唯一的请求ID
    host?: string; // 方便后端故障排除：当前访问服务器的主机
}
```
:::tip
`?` 表示该属性可能不存在
:::
## 前端
[Ant Design 设计规范](https://ant.design/docs/spec/introduce-cn 'Ant Design 设计规范')
