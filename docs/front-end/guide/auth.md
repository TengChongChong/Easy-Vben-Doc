# 权限
### 细粒度权限

**函数方式**

[usePermission](https://github.com/TengChongChong/Easy-Vben-Admin/tree/main/src/hooks/web/usePermission.ts) 还提供了按钮级别的权限控制。

```vue
<template>
  <a-button v-if="hasPermission([RoleEnum.TEST, RoleEnum.SUPER])" color="error" class="mx-4">
    拥有[test,super]角色权限可见
  </a-button>
</template>
<script lang="ts">
  import { usePermission } from '/@/hooks/web/usePermission';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    setup() {
      const { hasPermission } = usePermission();

      return { hasPermission };
    },
  });
</script>
```

**组件方式**

具体查看[权限组件使用](../components/auth.md)

**指令方式**

::: tip

指令方式不能动态更改权限

:::

```html
<a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4"> 拥有super角色权限可见</a-button>
```
