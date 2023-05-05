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

export default class telegramHandler {
  constructor() {}

  async init(data: any) {
    // tg分享

    console.log("telegramHandler init", data);
  }
}
