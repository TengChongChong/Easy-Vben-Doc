# SlideVerifyModal

拖动校验组件

## Usage

```vue
<template>
  <div class="p-10">
    <a-button @click="openVerifyModal">点击验证</a-button>
    
    <SlideVerifyModal @register="registerModal" @success="handleVerifySuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { SlideVerifyModal } from '/@/components/Verify';
  export default defineComponent({
    components: { SlideVerifyModal },
    setup() {
      const [registerModal, { openModal: openVerifyModal }] = useModal();
      
      function handleVerifySuccess(captchaVerification) {
        console.log('二次验证code：' + captchaVerification)
      }
      return {
        registerModal,
        openVerifyModal,
        handleVerifySuccess,
      };
    },
  });
</script>
```

## Props

| 属性         | 类型              | 默认值    | 说明        |
| ------------ |-----------------|--------|-----------|
| register     | `fn`            | -      | register  |
| success      | `fn`            | -      | 成功回调      |
