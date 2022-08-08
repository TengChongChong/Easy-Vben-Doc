module.exports = [
	{
		title: '指南',
		collapsable: false,
		children: [
			{
				title: '介绍',
				path: '/back-end/guide/introduction',
			},
			{
				title: '开始',
				path: '/back-end/guide/',
			},
			{
				title: '配置',
				path: '/back-end/guide/setting',
			},
			{
				title: '部署',
				path: '/back-end/guide/deploy',
			},
		]
	},
	{
		title: '工具类',
		children: [
			{
				title: '文件',
				children: [
					'utils/file/file-util',
					'utils/file/image-util',
				]
			},
			'utils/hu-tool',
			'utils/redis-util',
			'utils/shiro-util',
			'utils/sys-config',
		]
	},
	'redis',
	'annotation',
	'add-module',
	'faq',
	{
		title: '规范',
		children: [
			'standard/前言.md',
			{
				title: '一、编程规约',
				children: [
					'standard/编程规约/命名风格.md',
					'standard/编程规约/常量定义.md',
					'standard/编程规约/代码格式.md',
					'standard/编程规约/OOP规范.md',
					'standard/编程规约/集合处理.md',
					'standard/编程规约/并发处理.md',
					'standard/编程规约/控制语句.md',
					'standard/编程规约/注释规约.md',
				]
			},
			{
				title: '二、异常日志',
				children: [
					'standard/异常日志/异常处理.md',
					'standard/异常日志/日志规约.md',
					'standard/异常日志/其他.md'
				]
			},
			'standard/单元测试.md',
			'standard/安全规约.md',
			{
				title: '五、MySQL数据库',
				children: [
					'standard/MySQL数据库/建表规约.md',
					'standard/MySQL数据库/索引规约.md',
					'standard/MySQL数据库/SQL语句.md',
					'standard/MySQL数据库/ORM映射.md',
				]
			},
			{
				title: '六、工程结构',
				children: [
					'standard/工程结构/应用分层.md',
					'standard/工程结构/二方库依赖.md',
					'standard/工程结构/服务器.md',
				]
			},
			'standard/本手册专有名词.md',
		]
	},
];
