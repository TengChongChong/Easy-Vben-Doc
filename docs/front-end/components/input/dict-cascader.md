# DictCascader

字典级联选择，需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

## Usage

```vue
<template>
  <DictCascader v-model:value="value" dictType="sex" @change="handleChange"/>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { DictCascader } from '/@/components/Form';

  export default defineComponent({
    components: { DictCascader },
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
