// import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'../views/home.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import(/* webpackChunkName: "posts.index" */'../views/posts/index.vue')
    },
    {
        path: '/posts',
        name: 'posts.create',
        component: () => import(/* webpackChunkName: "posts.create" */'../views/posts/create.vue')
    },
    {
        path: '/posts',
        name: 'posts.edit',
        component: () => import(/* webpackChunkName: "posts.edit" */'../views/posts/edit.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router