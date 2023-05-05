// 支持微信、其他web2社交账户登录

export interface SingerData {
  timestamp: string;
  nonceStr?: string;
  signature: string;
}

export interface Code2Sesscion {
  appid: string;
  redirect_uri: string;
  state: string;
}

export default class WXAuthHandler {
  constructor() {}

  async init(data: any) {
    // 微信分享
    window.location.href =
      "//open.weixin.qq.com/connect/oauth2/authorize?appid=" +
      data.appid +
      "&redirect_uri=" +
      data.redirect_uri +
      "&response_type=code&scope=snsapi_userinfo&state=" +
      data.state +
      "#wechat_redirect";
    // return token
  }

  // new wx login api
}
