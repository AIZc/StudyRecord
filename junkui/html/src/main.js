import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Plugin from './plugin'

// 引入iview
import './iview/iview'
import './style/index.scss'

Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
