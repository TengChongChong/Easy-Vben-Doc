# DictName

字典名称

## Usage

```vue
<template>
  <DictName dictType="sex" value="1"/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import DictName from '/@/components/Dict/DictName.vue';

  export default defineComponent({
    components: {
      DictName,
    },
  });
</script>
```

## Props

| 属性       | 类型        | 默认值      | 说明      |
| ---------- |-----------|----------|---------|
| dictType   | `string`  | -        | 字典类别    |
| value     | `string`  | -        | 字典值     |