import { createRouter, createWebHistory } from "vue-router";

const routes=[
  {
    path:'/',
    redirect: '/test/list'
  },
  {
    path:'/test/list',
    component: () => import("@/views/list.vue"),
  },
  {
    path:'/test/detail',
    component: () => import("@/views/detail.vue"),
  }
]

const router=createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router