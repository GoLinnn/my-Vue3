import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventLayout from '../views/Event/EventLayout.vue'
import EventDetails from '../views/Event/EventDetails.vue'
import EventRegister from '../views/Event/EventRegister.vue'
import EventEdit from '../views/Event/EventEdit.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    // props 选项允许你将路由参数映射为组件的 props
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    // 传入到router的参数作为组件的参数
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // 优化
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
