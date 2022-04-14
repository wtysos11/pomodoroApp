import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Pomodoro from './views/pomodoro-item.vue'
import App from './App.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: App,
    },
    {
      path: '/pomodoro',
      name: 'pomodoro',
      component: Pomodoro,
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/todo-item.vue')
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('./views/statistic-item.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/setting-item.vue')
    },
  ]
})