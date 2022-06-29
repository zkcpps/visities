import reactRefresh from '@vitejs/plugin-react-refresh';
import { ConfigEnv, defineConfig, UserConfigExport } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import fs from 'fs';
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
import dotenv from 'dotenv';

try {
  // 根据环境变量加载环境变量文件
  const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`));
  // 根据获取的key给对应的环境变量赋值
  for (const key in file as object) {
    process.env[key] = file[key];
  }
} catch (e) {
  console.error(e);
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const config: UserConfigExport = {
    base: process.env.VITE_BASE_URL,
    plugins: [
      reactRefresh(),
      // 按需加载
      vitePluginImp({
        libList: [
          {
            libName: 'antd-mobile',
            style: () => true,
            libDirectory: 'es/components',
            // 处理本地 css tree-shaking
            replaceOldImport: mode === 'development' ? true : false,
          },
        ],
      }),
    ],
    css: {
      modules: {
        generateScopedName: mode === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
        hashPrefix: 'prefix',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      port: +process.env.VITE_PORT,
      host: process.env.VITE_HOST,
      proxy: {
        '/v1': {
          target: process.env.VITE_API_DOMAIN,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/v1/, ''),
        },
        '/account': {
          target: process.env.VITE_API_DOMAIN,
          changeOrigin: true,
        },
        '/fund': {
          target: process.env.VITE_API_DOMAIN,
          changeOrigin: true,
        },
      },
    },
  };
  return defineConfig(config);
};
