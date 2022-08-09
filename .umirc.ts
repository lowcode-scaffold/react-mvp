import { defineConfig } from 'umi';

const define = {
  ENV: 'local',
  USE_MOCK: false,
  API_HOST: 'http://127.0.0.1:3000',
};

export default defineConfig({
  define,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/vanilla' },
    { path: '/mobx', component: '@/pages/mobx/userManage/List' },
    { path: '/react', component: '@/pages/react/userManage/List' },
    { path: '/formily', component: '@/pages/formily-reactive/userManage/List' },
    { path: '/vanilla', component: '@/pages/vanilla/userManage/List' },
    { path: '/store/jotai', component: '@/pages/store/Jotai' },
    { path: '/store/hox', component: '@/pages/store/hox' },
  ],
  fastRefresh: {},
});
