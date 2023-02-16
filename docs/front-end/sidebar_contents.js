module.exports = [
    {
        title: '指南',
        collapsable: false,
        children: [
            {
                title: '介绍',
                path: '/front-end/guide/introduction',
            },
            {
                title: '开始',
                path: '/front-end/guide/',
            },
            {
                title: '项目配置',
                path: '/front-end/guide/settings',
            },
            {
                title: '路由',
                path: '/front-end/guide/router',
            },
            {
                title: '权限',
                path: '/front-end/guide/auth',
            },
            {
                title: '组件注册',
                path: '/front-end/guide/component',
            },
            {
                title: '样式',
                path: '/front-end/guide/design',
            },
            {
                title: '外部模块',
                path: '/front-end/guide/lib',
            },
            {
                title: '构建&部署',
                path: '/front-end/guide/deploy',
            },
            // {
            //     title: 'Electron',
            //     path: '/front-end/guide/electron',
            // },
        ],
    },
    {
        title: '组件',
        collapsable: false,
        children: [
            {
                title: '前言',
                path: '/front-end/components/introduction',
            },
            {
                title: '通用',
                collapsable: false,
                children: [
                    {
                        title: 'BasicArrow - 箭头',
                        path: '/front-end/components/common/basic-arrow',
                    },
                    {
                        title: 'BasicHelp - 帮助按钮',
                        path: '/front-end/components/common/basic-help',
                    },
                    {
                        title: 'BasicTitle - 帮助标题',
                        path: '/front-end/components/common/basic-title',
                    },
                    {
                        title: 'Icon - 图标',
                        path: '/front-end/components/common/icon',
                    },
                    {
                        title: 'SvgIcon - Svg图标',
                        path: '/front-end/components/common/svg-icon',
                    },
                    {
                        title: 'PageFooter - 页面底部工具栏',
                        path: '/front-end/components/common/page-footer',
                    },
                    {
                        title: 'PageWrapper - 包裹页面',
                        path: '/front-end/components/common/page-wrapper',
                    },
                    {
                        title: 'PopConfirmButton - 按钮&确认',
                        path: '/front-end/components/common/pop-confirm-button',
                    },
                ]
            },
            {
                title: '数据录入',
                collapsable: false,
                children: [
                    {
                        title: 'CodeEditor - 代码编辑器',
                        path: '/front-end/components/input/code-editor',
                    },
                    {
                        title: 'Cropper - 图片剪裁',
                        path: '/front-end/components/input/cropper',
                    },
                    {
                        title: 'DictCascader - 字典级联选择',
                        path: '/front-end/components/input/dict-cascader',
                    },
                    {
                        title: 'DictCheckbox - 字典多选框',
                        path: '/front-end/components/input/dict-checkbox',
                    },
                    {
                        title: 'DictRadio - 字典单选框',
                        path: '/front-end/components/input/dict-radio',
                    },
                    {
                        title: 'DictSelect - 字典下拉选择器',
                        path: '/front-end/components/input/dict-select',
                    },
                    {
                        title: 'Form - 表单',
                        path: '/front-end/components/input/form',
                    },
                    {
                        title: 'IconPicker - 图标选择',
                        path: '/front-end/components/input/icon-picker',
                    },
                    {
                        title: 'Markdown - Markdown',
                        path: '/front-end/components/input/markdown',
                    },
                    {
                        title: 'StrengthMeter - 密码强度',
                        path: '/front-end/components/input/strength-meter',
                    },
                    {
                        title: 'Tinymce - 富文本编辑器',
                        path: '/front-end/components/input/tinymce',
                    },
                    {
                        title: 'Upload - 文件上传',
                        path: '/front-end/components/input/upload',
                    },
                ]
            },
            {
                title: '数据显示',
                collapsable: false,
                children: [
                    {
                        title: 'CollapseContainer - 折叠卡片',
                        path: '/front-end/components/display/collapse-container',
                    },
                    {
                        title: 'CountDown - 倒计时',
                        path: '/front-end/components/display/count-down',
                    },
                    {
                        title: 'CountTo - 数字动画',
                        path: '/front-end/components/display/count-to',
                    },
                    {
                        title: 'Description - 描述列表',
                        path: '/front-end/components/display/desc',
                    },
                    {
                        title: 'DictName - 字典名称',
                        path: '/front-end/components/display/dict-name',
                    },
                    {
                        title: 'DictTag - 字典标签',
                        path: '/front-end/components/display/dict-tag',
                    },
                    {
                        title: 'FlowChart - 流程图',
                        path: '/front-end/components/display/flow-chart',
                    },
                    {
                        title: 'JsonPreview - Json预览',
                        path: '/front-end/components/display/json-preview',
                    },
                    {
                        title: 'Qrcode - 二维码',
                        path: '/front-end/components/display/qrcode',
                    },
                    {
                        title: 'Table - 表格',
                        path: '/front-end/components/display/table',
                    },
                    {
                        title: 'Time - 相对时间',
                        path: '/front-end/components/display/time',
                    },
                    {
                        title: 'Tree - 树',
                        path: '/front-end/components/display/tree',
                    },

                ]
            },
            {
                title: '反馈',
                collapsable: false,
                children: [
                    {
                        title: 'Drawer - 抽屉',
                        path: '/front-end/components/feedback/drawer',
                    },
                    {
                        title: 'Loading - 加载中',
                        path: '/front-end/components/feedback/loading',
                    },
                    {
                        title: 'Modal - 对话框',
                        path: '/front-end/components/feedback/modal',
                    },
                    {
                        title: 'Verify - 拖动校验',
                        path: '/front-end/components/feedback/verify',
                    },
                    {
                        title: 'VirtualScroll - 虚拟滚动',
                        path: '/front-end/components/feedback/virtual-scroll',
                    },
                ]
            },
            {
                title: '其他',
                collapsable: false,
                children: [
                    {
                        title: 'Authority - 权限',
                        path: '/front-end/components/other/auth',
                    },
                    {
                        title: 'ClickOutSide - 元素外点击',
                        path: '/front-end/components/other/click-out-side',
                    },
                    {
                        title: 'LazyContainer - 懒加载',
                        path: '/front-end/components/other/lazy-container',
                    },
                    {
                        title: 'ScrollContainer - 滚动容器',
                        path: '/front-end/components/other/scroll-container',
                    },
                    {
                        title: 'Transition - 动画',
                        path: '/front-end/components/other/transition',
                    },
                ]
            },
            {
                title: '函数式组件',
                collapsable: false,
                children: [
                    {
                        title: 'ContextMenu - 右键菜单',
                        path: '/front-end/components/functional/context-menu',
                    },
                    {
                        title: 'Loading - 加载中',
                        path: '/front-end/components/functional/loading',
                    },
                    {
                        title: 'Preview - 图片预览',
                        path: '/front-end/components/functional/preview',
                    },
                ],
            },
        ],
    },
    {
        title: '深入',
        collapsable: false,
        children: [
            {
                title: '跨域处理',
                path: '/front-end/dep/cors',
            },
            {
                title: '图标',
                path: '/front-end/dep/icon',
            },
            {
                title: '国际化',
                path: '/front-end/dep/i18n',
            },
            {
                title: '项目规范',
                path: '/front-end/dep/lint',
            },
            {
                title: '黑暗主题',
                path: '/front-end/dep/dark',
            },
        ],
    },
    {
        title: '其他',
        collapsable: false,
        children: [
            {
                title: '常见问题',
                path: '/front-end/other/faq',
            },
            {
                title: '常见疑点',
                path: '/front-end/other/doubt',
            },
        ],
    },
];
