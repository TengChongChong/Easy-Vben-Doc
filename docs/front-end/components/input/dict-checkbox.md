# DictCheckbox

字典多选框，在一组可选项中进行多项选择时；单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## Usage

```vue
<template>
  <DictCheckbox v-model:value="value" dictType="sex" @change="handleChange"/>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { DictCheckbox } from '/@/components/Form';

  export default defineComponent({
    components: { DictCheckbox },
    setup() {
      const value = ref<string[]>(['1']);
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
