module.exports = {
  theme:'antdocs',
  title: 'Easy Vben',
  description: '通用管理系统快速开发框架',
  base: '/',
  head: [
    ['link',{ rel: 'icon',href: '/assets/logo.svg' }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    logo: '/assets/logo.svg',
    smoothScroll: true,
    backToTop: true,
    nav: require('./config/nav'),
    sidebar: require('./config/sidebar'),
    lastUpdated: 'Last Updated',
    // repo: 'https://github.com/zpfz/vuepress-creator',
    editLinks: false,
    algolia: {
      appId: 'H8MDE4NQJV',
      apiKey: '388efbfb54ea08842f3702f55d015457',
      indexName: 'easy-vben',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
};
