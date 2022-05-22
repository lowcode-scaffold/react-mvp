import { defineConfig } from 'umi';

const define = {
  ENV: 'prod',
  USE_MOCK: false,
  API_HOST: 'http://yapi.smart-xwork.cn/mock/129987',
};
export default defineConfig({
  define,
});
