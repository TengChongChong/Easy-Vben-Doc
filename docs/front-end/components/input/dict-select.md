# DictSelect

字典下拉选择器，弹出一个下拉菜单给用户选择操作，当选项少时（少于 5 项），建议使用 [DictRadio](/front-end/components/input/dict-radio) 直接将选项平铺。

## Usage

```vue
<template>
  <DictSelect v-model:value="value" dictType="sex" @change="handleChange"/>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { DictSelect } from '/@/components/Form';

  export default defineComponent({
    components: { DictSelect },
    setup() {
      const value = ref<string>('1');
      function handleChange(value: string) {
        console.log(value);
      }
      return { handleChange, value };
    },
  });
</script>
```

## Props

| 属性            | 类型       | 默认值     | 说明       |
|---------------|----------|---------|----------|
| dictType      | `string` | -       | 字典类型     |
| v-model:value | `string | number | sttring[]` | -    | 双向绑定值    |

## Events

| 事件   | 回调参数           | 返回值 | 说明          |
| ------ | ------------------ | ------ |-------------|
| change | `(str:string)=>{}` |        | value改变触发事件 |
