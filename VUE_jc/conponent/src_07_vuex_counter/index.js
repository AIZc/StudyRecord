import Vue from 'vue'
import App from "./App";
import store from "@/vuex/store";

new Vue({
    components:{
        App:App
    },
    template:'<App/>',
    store  //所有的逐渐对象都能看到的一个指定store属性  $store
}).$mount('#root')