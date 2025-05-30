import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Blog',
  title: "开发日志",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '抓包', link: '/markdown-examples' },
      { text: '脱壳', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '抓包', link: '/抓包/test.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxksunflower/Blog' }
    ]
  }
})
