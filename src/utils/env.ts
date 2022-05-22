/* eslint-disable no-undef */
// @ts-nocheck

export type IENV = 'local' | 'prod';

/**
 * 在.umirc.ts 用define定义的全局变量，会在webpack编译时替换
 */
const env = {
  ENV: ENV as IENV,
  USE_MOCK: USE_MOCK as boolean,
  API_HOST: API_HOST as string,
};

export default env;

export const isProduction = env.ENV === 'prod';
export const isLocal = env.ENV === 'local';
