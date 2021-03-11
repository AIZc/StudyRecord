import Msite from "@/pages/Msite/Msite";
import Search from "@/pages/Search/Search"
import Profile from "@/pages/Profile/Profile";
import Order from "@/pages/Order/Order"

export default [
    {
        path:'/msite',
        component:Msite
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/',
        redirect:'/msite'
    }
]