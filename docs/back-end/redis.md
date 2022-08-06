---
title: 缓存
---

# 缓存
- 将`常用并且不经常修改`的数据放到Redis中，用于提高性能与用户体验。
## 使用
框架中封装了Redis的常用操作，可以到[RedisUtil](back-end/utils/redis-util.html)查看
::: tip
如`RedisUtil`无法满足需求可注入`RedisTemplate<String, Object> redisTemplate`直接操作
:::
## 维护
- 为方便运维管理，建议将不同用途缓存使用不用key前缀区分。
- 以下是部分key前缀&说明列表
- 提供了简单的`Redis`在线管理，可以到[缓存监控](/built-in/system/monitor.html#缓存监控)查看

::: tip
建议按照模块统一设置Redis前缀，以上配置在`com.easy.admin.common.redis.constant.RedisPrefix`中
:::
| 前缀 | 说明 |
| --- | --- |
| account: | 用户登录尝试次数以及锁定账号 |
| account:session: | 当前会话尝试登录次数 |
| shiro:session: | shiro session |
| shiro:authorization: | shiro 授权 |
| sys:config: | 系统参数 |
| reset:password:verification:code: | 找回密码验证码 |
| binding:phone:verification:code | 绑定手机号短信验证码 |
| verification:code: | 登录验证码 |



