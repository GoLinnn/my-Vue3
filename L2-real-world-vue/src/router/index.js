import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventLayout from '../views/Event/EventLayout.vue'
import EventDetails from '../views/Event/EventDetails.vue'
import EventRegister from '../views/Event/EventRegister.vue'
import EventEdit from '../views/Event/EventEdit.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    // props 选项允许你将路由参数映射为组件的 props
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/:id',
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
    // 重定向
    //path: '/event/:id',
    // 此方法不能解决nested route的重定向问题
    // redirect: () => {
    //   return { name: 'EventLayout' } // 自动传id参数
    // },

    // nested route 重定向方法一
    // redirect: () => {
    //   return { name: 'EventLayout' }
    // },
    // children: [
    //   { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
    //   { path: 'edit', redirect: () => ({ name: 'EventEdit' }) },
    // ],

    // nested route 重定向方法二
    // *. 用于匹配 /
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/events/' + to.params.afterEvent }
    },
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
  {
    path: '/:catchAll(.*)', // 获取不匹配以上所有路径的路径，但是不包括/event/后的路径
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
