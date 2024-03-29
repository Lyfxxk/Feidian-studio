import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home  from '../views/Home.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        // component:Home
        component:()=>import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User')
            },
        ]
    },
]

const router=new VueRouter({
    mode:'history',
    routes
})

export default router