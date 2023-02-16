# IconPicker

本组件详细说明请参阅[图标选择器](../dep/icon.html#图标选择器)

## Usage

```vue
<template>
  <div>
    <IconPicker />
  </div>
</template>
<script>
  import { IconPicker } from '/@/components/Icon';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { IconPicker },
  });
</script>
```

## Props

| 属性     | 类型      | 默认值    | 说明                                          |
| -------- | --------- | --------- | --------------------------------------------- |
| width    | `string`  | 100%      | 宽度                                          |
| pageSize | `number`  | 140       | 每页显示的图标数                              |
| copy     | `boolean` | false     | 是否可以复制                                  |
| mode     | `string`  | `iconify` | 备选图标池，为 svg 时，会读取所有 svg sprite 图标。详见下方说明 |


::: tip mode 说明

- `mode`为`iconify`时，会使用预生成的[图标集数据](../dep/icon.html#图标集预生成)作为备选图标池
- `mode`为`svg`时，会使用 `/src/assets/icons` 下的所有svg图标（可包含一级子目录）作为备选图标池，详见[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons)。

:::
