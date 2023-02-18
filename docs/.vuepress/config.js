const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "portfolio",
  description: 'vdoing博客主题模板',
  base: '/portfolio/', // 格式：'/<仓库名>/'， 默认'/'
  repo: 'portfolio',
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}