import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home.vue')
    },
    {
      path: '/hello-world',
      name: 'hello',
      component: () => import('@/components/HelloWorld.vue')
    },
  ],
});
router.beforeEach((to, from) => {
  /*
    1. return false  //  返回false取消导航
    2. return { name: 'Login' } // 将用户重定向到登录页面
  */
})
export default router;
