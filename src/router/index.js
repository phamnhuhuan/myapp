import { createRouter, createWebHistory } from 'vue-router'
import user from './user';
import admin from './admin';
import notfound from './notfound';
import { UserStore } from '../store/auth/UserStore';
const routes=[...admin,...user,...notfound]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from) => {
  const store = UserStore()
  if (to.meta.Auth && store.getToken == 0) {
    return { name: 'login' }
  }
  else if (to.meta.Auth == false && store.getToken != 0) {
    return { name: 'home' }
  }
}
)
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Trang chủ'
}
)
export default router;