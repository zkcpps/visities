/** 引入微信sdk
 * res.wx.qq.com/open/js/jweixin-1.2.0.js 存在config 跟 agentConfig
 * jwxwork sdk 只有 agentConfig 变量
 */

(() => {
  const script: any = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js';
  document.head.appendChild(script);
})();
