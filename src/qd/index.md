# Vue Router路由



## 1. 编程式导航的使用
### 代码实现页面跳转（push方法）
```js
import {useRouter} from 'vue-router'

const router = useRouter()
router.push("/about")
```