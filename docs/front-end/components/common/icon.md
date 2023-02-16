# Icon

用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标）

icon 组件位于 [src/components/Icon](https://github.com/TengChongChong/Easy-Vben-Admin/tree/main/src/components/Icon) 内

::: tip

icon 的值可以在 [Iconify](https://iconify.design) 或 [Netlify](https://icones.netlify.app/collection/ant-design) 上查询

:::

## Usage

```vue
<template>
  <Icon icon="gg:loadbar-doc"></Icon>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Icon } from '/@/components/Icon';
  export default defineComponent({
    components: { Icon },
  });
</script>
```

## Props

| 属性   | 类型     | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| icon   | `string` | -      | 图标名   |
| color  | `string` | -      | 图标颜色 |
| size   | `number` | 16     | 图标大小 |
| prefix | `string` | -      | 图标前缀 |

::: tip 提示

如果 `icon` 值以 `|svg` 结尾，则会渲染成 [SvgIcon 组件](#SvgIcon)

:::