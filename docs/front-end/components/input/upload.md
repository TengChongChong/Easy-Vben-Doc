# Upload

文件上传组件

## Usage

```vue
<template>
  <BasicUpload :accept="['image/*', 'xls']" :maxSize="20" :maxNumber="10" @change="handleChange"/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';

  export default defineComponent({
    components: { BasicUpload },
    setup() {
      return {
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
      };
    },
  });
</script>
```

## Props

| 属性              | 类型       | 默认值      | 可选值 | 说明                                     |
| ----------------- | ---------- |----------| ------ | ---------------------------------------- |
| value             | `string[]` | -        | -      | 已上传的文件列表，支持v-model           |
| showPreviewNumber | `boolean`  | true     | -      | 是否显示预览数量                         |
| emptyHidePreview  | `boolean`  | false    | -      | 没有上传文件时是否隐藏预览               |
| helpText          | `string`   | -        | -      | 帮助文本                                 |
| maxSize           | `number`   | 2        | -      | 单个文件最大体积，单位 M                 |
| maxNumber         | `number`   | Infinity | -      | 最大上传数量，Infinity 则不限制          |
| accept            | `string[]` | -        | -      | 限制上传格式，可使用文件后缀名(点号可选)或MIME字符串。例如 `['.doc,','docx','application/msword','image/*']` |
| multiple          | `boolean`  | true     | -      | 开启多文件上传                           |
| uploadParams      | `any`      | -        | -      | 上传携带的参数                           |

## Events

| 事件   | 回调参数           | 返回值 | 说明                     | 版本 |
| ------ | ------------------ | ------ | ------------------------ | - |
| change | `(fileList)=>void` |        | 文件列表内容改变触发事件 | |
| delete | `(record)=>void`   |        | 在上传列表中删除文件的事件                 | |
| preview-delete | `(url:string)=>void`   |        | 在预览列表中删除文件的事件                 | 2.5.3 |
