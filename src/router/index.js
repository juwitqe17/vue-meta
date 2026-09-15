import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/artikel', name: 'artikel', component: () => import('@/views/Artikel.vue') },
  { path: '/kreasi', name: 'kreasi', component: () => import('@/views/Kreasi.vue') },
  { path: '/tentang', name: 'tentang', component: () => import('@/views/Tentang.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router