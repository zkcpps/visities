import { Toast } from 'antd-mobile';

/**
 * [通过参数名获取url中的参数值]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
export const getQueryValue = (queryName: string, search: string) => {
  const query = decodeURI(search.substring(1));
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === queryName) {
      return pair[1];
    }
  }
  return null;
};

export const getSearchValue = (name: string, search: string) => {
  const res = new RegExp('(?:&|/?)' + name + '=([^&$]+)').exec(search);
  return res ? res[1] : '';
};

// 复制内容到剪贴板
export const copyToClip = (content: string) => {
  const aux = document.createElement('input');
  aux.setAttribute('value', content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);

  Toast.show('复制成功');
};

export function closeWin() {
  try {
    window.opener = window;
    const win = window.open('', '_self');
    win.close();
  } catch (e) {}
}

// 是否企微环境
export const isOnlyWxwork = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) && ua.match(/wxwork/i)) {
    return true;
  }
  return false;
};
