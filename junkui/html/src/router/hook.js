import router from './router'
// import { api } from '@/scripts/api'
import { appName } from '@/scripts/constants'

router.beforeEach(async (to, from, next) => {
  next()
  window.document.title = to.meta.title || appName
})