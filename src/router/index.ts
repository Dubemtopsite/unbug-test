import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Landing Page',
        component: () => import('../views/LandingPage.vue'),
        meta: {
          isPublic: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach( async (to, from, next) =>{
    window.scrollTo(0, 0)
  
    next()
  })

export default router