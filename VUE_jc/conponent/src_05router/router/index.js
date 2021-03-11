/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import MessageDetail from "@/pages/MessageDetail";
//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        //路由
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'news',
                    path: '/home/news',
                    component: News,
                },
                {
                    path: '/home/message',
                    component: Message,
                    children: [
                        {
                            name:'detail',
                            path: '/home/message/detail/:id',
                            component: MessageDetail,
                            props:true
                        }
                    ]
                },
                {
                    path: '',
                    redirect: '/home/news'
                }
            ]
        },

        //自动重定向
        {
            path: '/',
            redirect: '/about',
        },
    ],


})