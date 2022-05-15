import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/mobx' },
    { path: '/mobx', component: '@/pages/mobx/userManage/List' },
    { path: '/react', component: '@/pages/react/userManage/List' },
    { path: '/formily', component: '@/pages/formily-reactive/userManage/List' },
    { path: '/store/jotai', component: '@/pages/store/Jotai' },
    { path: '/store/hox', component: '@/pages/store/hox' },
  ],
  fastRefresh: {},
});
