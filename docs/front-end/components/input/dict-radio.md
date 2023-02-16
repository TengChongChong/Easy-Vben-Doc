# DictRadio

字典单选框，用于在多个备选项中选中单个状态，和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## Usage

```vue
<template>
  <DictRadio v-model:value="value" dictType="sex" @change="handleChange"/>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { DictRadio } from '/@/components/Form';

  export default defineComponent({
    components: { DictRadio },
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

| 属性            | 类型                | 默认值  | 说明       |
|---------------|-------------------|------|----------|
| dictType      | `string`          | -    | 字典类型     |
| v-model:value | `string`          | -    | 双向绑定值    |

## Events

| 事件   | 回调参数           | 返回值 | 说明          |
| ------ | ------------------ | ------ |-------------|
| change | `(str:string)=>{}` |        | value改变触发事件 |
