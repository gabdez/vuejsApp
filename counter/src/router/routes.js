
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyCounter.vue'),
    children: [
      { path: 'plus', component: () => import('pages/counterPlus.vue') },
      { path: 'minus', component: () => import('pages/counterMinus.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
