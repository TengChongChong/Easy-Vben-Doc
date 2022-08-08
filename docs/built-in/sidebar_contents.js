module.exports = [
	{
		title: '简介',
		path: '/built-in/',
	},
	// {
	// 	title: '权限管理',
	// 	collapsable: false,
	// 	children: [
	// 	],
	// },
	{
		title: '流程管理',
		collapsable: false,
		children: [
			{
				title: '模型管理',
				path: '/built-in/workflow/model',
			},
			{
				title: '流程管理',
				path: '/built-in/workflow/process',
			},
			{
				title: '流程跟踪',
				path: '/built-in/workflow/history',
			},
		],
	},
	{
		title: '系统管理',
		collapsable: false,
		children: [
			{
				title: '字典管理',
				path: '/built-in/sys/dict',
			},
			{
				title: '定时任务',
				path: '/built-in/sys/scheduler',
			},
			{
				title: '导入模版',
				path: '/built-in/sys/import',
			},
			{
				title: '数据源',
				path: '/built-in/sys/data-source',
			},
		],
	},
	{
		title: '系统监控',
		collapsable: false,
		children: [
			{
				title: '异常日志',
				path: '/built-in/sys/error-log',
			},
			{
				title: '访问日志',
				path: '/built-in/sys/log',
			},
		],
	}
];
