import Vue from 'vue'
import App from "@/App";
import store from "@/vuex/store";



new Vue({

  // 注册局部组件
  components: { // 注册组件(后面才能写组件标签)
    App: App
  },
  template: '<App/>',
  store
}).$mount('#root')