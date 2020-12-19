import { defineConfig } from 'umi';

const env = process.env.NODE_ENV;
const path = env === 'development' ? 'http://127.0.0.1:8000/' : '/public/';

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: '../public/',
  publicPath: path,
  routes: [{ path: '/', component: '@/pages/index' }],
});
