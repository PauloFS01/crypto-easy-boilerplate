
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/charts',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Charts.vue') }
    ]
  },
  {
    path: '/compare',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'compare', component: () => import('pages/Compare.vue') }
    ]
  },
  {
    path: '/orders',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'orders', component: () => import('pages/Orders.vue') }
    ]
  },
  {
    path: '/global',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'global', component: () => import('pages/GlobalPrices.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: 'notfound',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
