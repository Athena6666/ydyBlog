import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'
import { customElements } from './shared/customeElements'
import ItKatex from 'markdown-it-katex'

export default defineConfig({
  title: 'ydyblog',
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',
  head: [['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]],
  themeConfig: {
    logo: '/e.png',
    siteTitle: false,
    aside: true,
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Athena6666' },
    ],
    algolia: {
      appId: 'SQQX8T24C2',
      apiKey: '5ead0f097971bf2b9263a5e0f50dece8',
      indexName: 'liujiayu',
      // debug: false,
    },
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // lastUpdatedText: '上次更新于',
    footer: {
      message: '<a style="text-decoration:none" href="http://www.beian.miit.gov.cn">苏ICP备2024068067号</a>.',
      copyright: 'Copyright © 2024 athena-ydy'
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(ItKatex)
    },
    lineNumbers: true,
  },

})
