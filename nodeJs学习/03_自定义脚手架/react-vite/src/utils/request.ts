import axios from 'axios';
import { get } from 'lodash';
import { Toast } from 'antd-mobile';

const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_API_DOMAIN,
  timeout: 40 * 1000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error) => {
  const status = get(error, 'response.status');
  switch (status) {
    /* eslint-disable no-param-reassign */
    case 400:
      error.message = '请求错误';
      break;
    case 401:
      error.message = '未授权，请登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = `请求地址出错: ${error.response.config.url}`;
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器内部错误';
      break;
    case 501:
      error.message = '服务未实现';
      break;
    case 502:
      error.message = '网关错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网关超时';
      break;
    case 505:
      error.message = 'HTTP版本不受支持';
      break;
    default:
      break;
  }
  Toast.clear();
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  Toast.show({
    icon: 'loading',
    content: '请求中…',
    duration: 0,
    maskClickable: false, //背景不允许点击
  });
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use(async (response) => {
  Toast.clear();
  // http status 200 && code 非 200 的错误拦截
  const body = await response.data;

  if (response.status === 200 && body.code !== 0) {
    Toast.show({
      icon: 'fail',
      content: body.msg || '接口有误',
    });
  }
  return response.data;
}, errorHandler);

export default request;
