# PageFooter

用于页面底部工具栏

## 使用

```vue
<template>
  <div>
    <PageFooter>
      <template #left>left</template>
      <template #right>right</template>
    </PageFooter>
  </div>
</template>
<script>
  import { PageFooter } from '/@/components/Page';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { PageFooter },
    setup() {
      return {};
    },
  });
</script>
```

## Slots

| 名称  | 说明     |
| ----- | -------- |
| left  | 左侧区域 |
| right | 右侧区域 |
