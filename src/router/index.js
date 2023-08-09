import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  // 다른 라우팅 설정 추가
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router