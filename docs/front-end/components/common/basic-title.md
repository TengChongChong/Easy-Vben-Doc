# BasicTitle

用于显示标题，可以显示帮助按钮及文本

## Usage

```vue
<template>
  <div>
    <BasicTitle helpMessage="提示1">标题</BasicTitle>
    <BasicTitle :helpMessage="['提示1', '提示2']">标题</BasicTitle>
  </div>
</template>
<script>
  import { BasicTitle } from '/@/components/Basic';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicTitle },
  });
</script>
```

## Props

| 属性        | 类型               | 默认值  | 说明                     |
| ----------- | ------------------ | ------- | ------------------------ |
| helpMessage | `string｜string[]` | -       | 标题右侧帮助按钮信息     |
| span        | `boolean`          | `false` | 是否显示标题左侧蓝色色块 |
| normal      | `boolean`          | `false` | 将文字默认化，不加粗     |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 标题文本 |