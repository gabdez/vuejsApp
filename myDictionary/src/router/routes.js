const routes = [{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Home.vue')
    }]
  },
  {
    path: '/selectL',
    component: () => import('pages/SelectLanguage.vue')
  },
  {
    path: '/selectL/:language',
    name: 'language',
    component: () => import('pages/languageDictionary.vue')
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
