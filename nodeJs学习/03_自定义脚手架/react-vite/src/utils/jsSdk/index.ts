import setting from './config';
import jsApiList from './jsApiList';

/**
 * 授权获取config
 */
const getToken = async () => {
  return new Promise((resolve) => {
    window
      .fetch(
        `https://bot.planplus.cn/v1/api/weixin/getToken/xiaolantongxue?uri=${encodeURIComponent(
          window.location.href.split('#')[0]
        )}`
      )
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        resolve(myJson);
      });
  });
};

/**
 * 授权获取签名 agentConfig
 */
const getAgentTicket = async () => {
  return new Promise((resolve) => {
    window
      .fetch(
        `https://bot.planplus.cn/v1/api/weixin/getAgentTicket/xiaolantongxue?uri=${encodeURIComponent(
          window.location.href.split('#')[0]
        )}`
      )
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        resolve(myJson);
      });
  });
};

// 获取url 参数 兼容hash模式与非hash模式
const getUrlParam = (name: string) => {
  const search = window.location.search?.substr(1) || window.location.hash?.split('?')[1];
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = search.match(reg);

  if (r != null) return unescape(r[2]);
  return '';
};

/**
 * 企微授权 统一处理
 */

const WWAuth = (toUrl?: string) => {
  // 本地测试
  // if (window.location.port) {
  //   sessionStorage.setItem('userId', '15878345704'); // 理财师ID
  //   const url = window.location.href
  //   window.location.href = url;
  //   return
  // }

  if (window.location.href.indexOf('userId') > -1) {
    const userId = getUrlParam('userId');
    sessionStorage.setItem('userId', userId);
    // TODO:授权后是否要跳到其他页面
    const url = window.location.href;
    window.location.href = toUrl || url;
    return;
  }

  if (window.location.href.indexOf('chatId') > -1) {
    const chatId = getUrlParam('chatId');
    sessionStorage.setItem('chatId', chatId);
    // TODO:授权后是否要跳到其他页面
    const url = window.location.href;
    window.location.href = toUrl || url;
    return;
  }

  if (!sessionStorage.getItem('userId') || !sessionStorage.getItem('chatId')) {
    // 授权获取当前访问用户身份

    window.location.href = `https://bot.planplus.cn/v1/api/weixin/oauth2/xiaolantongxue?uri=${encodeURIComponent(
      window.location.href
    )}`;
  }
};

// 企微初始化
const init = async () => {
  const [config, agentConfig]: [any, any] = await Promise.all([getToken(), getAgentTicket()]);

  // const agentConfig: any = await getAgentTicket();

  // console.log('setting', setting);
  // console.log('agentConfig', agentConfig);

  const { wx } = window;

  wx?.config({
    beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
    debug: false, // 开启调试模式，调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端开发，参数信息会通过log打出，仅在pc端时才会打印。
    appId: setting.corpId, // 必填，企业微信的corpID
    timestamp: config.timestamp, // 必填，生成签名的时间戳
    nonceStr: config.nonceStr, // 必填，生成签名的随机串
    signature: config.signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
    jsApiList, // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
  });

  wx?.ready(() => {
    wx?.agentConfig({
      corpid: setting.corpId, // 必填，企业微信的corpid，必须与当前登录的企业一致
      agentid: setting.agentId, // 必填，企业微信的[应用id](##14953#agentid)
      timestamp: agentConfig.timestamp, // 必填，生成签名的时间戳
      nonceStr: agentConfig.nonceStr, // 必填，生成签名的随机串
      signature: agentConfig.signature, // 必填，签名，见附录1
      jsApiList, // 必填
      fail: () => {
        console.log('配置configAgent ---- 失败');
        window.wwAgentConfig = false;
      },
      success: () => {
        console.log('配置configAgent ---- 成功');
        window.wwAgentConfig = true;
      },
    });
  });
};

// TODO:获取当前打开的群或者个人信息
const getCurExternal = () => {
  return new Promise((resolve, reject) => {
    window.wx?.invoke('getCurExternalContact', {}, async (response) => {
      if (response.err_msg === 'getCurExternalContact:ok') {
        resolve({
          externaluserid: response.userId,
          kind: 2,
          entry: 'single_chat_tools',
        }); // kind: 1 为群聊， kind: 2 个人
      } else if (
        /**
         * 群活动侧边栏 返回的 mac 跟windows 系统不一样 前面
         * mac 多了一个err_code：2 getCurExternalContact:fail_fail_without context of external contact
         * window 没有err_code getCurExternalContact:fail_without context of external contact
         */

        response.err_msg === 'getCurExternalContact:fail_without context of external contact' ||
        response.err_msg === 'getCurExternalContact:fail' ||
        response.err_code === 2
      ) {
        window.wx?.invoke('getCurExternalChat', {}, (res) => {
          if (res.err_msg === 'getCurExternalChat:ok') {
            const { chatId } = res; // 返回当前客户群的群聊ID
            resolve({
              chatId,
              kind: 1,
              entry: 'group_chat_tools',
            }); // kind: 1 为群聊， kind: 2 个人
          } else {
            reject(res.err_msg);
            console.error(res.err_msg);
          }
        });
      }
    });
  });
};

const wwJsSdk = {
  init,
  getCurExternal,
  WWAuth,
  getUrlParam,
};

window.wwJsSdk = wwJsSdk;
export type JsSDK = typeof wwJsSdk;

export default wwJsSdk;
