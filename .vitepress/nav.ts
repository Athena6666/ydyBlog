import type { DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '随手记', link: '/src/notes/' },
    { text: 'AI', link: '/src/AI/' },
    { text: '网安', link: '/src/networkSecurity/' },
    { text: '前端', link: '/src/qianduan/' },
    {
      text: 'Bug笔记',
      items: [
        {
          items: [
            { text: '测试', link: '/src/bugs/' },
          ],
        },
      ],
    },
    {
      text: 'Fun',
      items: [
        {
          items: [
            { text: '前端', link: '/src/fun/' },
          ],
        },
      ],
    },
  ]
}
