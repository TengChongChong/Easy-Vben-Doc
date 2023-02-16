# DictTag

字典标签

## Usage

```vue
<template>
  <DictTag dictType="sex" value="1"/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import DictTag from '/@/components/Dict/DictTag.vue';

  export default defineComponent({
    components: {
      DictTag,
    },
  });
</script>
```

## Props

| 属性       | 类型        | 默认值      | 说明      |
| ---------- |-----------|----------|---------|
| dictType   | `string`  | -        | 字典类别    |
| value     | `string`  | -        | 字典值     |