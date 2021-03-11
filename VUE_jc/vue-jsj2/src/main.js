import Vue from 'vue'
import App from './App'
import store from './vuex/store'

new Vue({
  // 注册局部组件
  render:h => h(App),
  store
}).$mount('#app')
