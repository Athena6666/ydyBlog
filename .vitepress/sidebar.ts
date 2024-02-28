import { getMds } from '../scripts'

export function sidebar() {
  return {
    '/src/fun/': [
      { text: '前端', collapsed: false, items: getMds('/fun/') },
    ],
    '/src/bugs/': [
      { text: '测试1', collapsed: false, items: getMds('/bugs/') },
    ],
    '/src/AI/': [
      { text: '毕设准备', collapsed: false, items: getMds('/AI/') }
    ],
    '/src/notes/': [
      { text: '随手记', collapsed: false, items: getMds('/notes/') }
    ],
    '/src/qd/': [
      { text: '前端学习', collapsed: false, items: getMds('/qd/') }
    ]
  }
}
