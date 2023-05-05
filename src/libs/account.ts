// UYUX账号模块
import UYUXClint from "./index";
import * as UserInfo from "../handlers/interfaces";

export default class UYUXAccount {
  private client: UYUXClint;

  constructor(client: UYUXClint) {
    this.client = client;
  }

  async login() {
    // await this.model.insertOne(record)
  }

  // 登出
  async logout() {}

  //检测是否登录
  async checkLogin() {}

  async getUserInfo(userUid = "") {
    let profile = {
      nickname: "",
      avatar: "",
      gender: 0,
      location: "",
      bio: "",
    };

    try {
      const info = await this.client.post("/user/social/public/info", {
        userUid,
      });
      // console.log("info", info);
      return info;
    } catch (error) {
      console.error(error);
    }

    return profile;
  }

  //我的信息获取好友数API：
  async friendNumber() {
    const data = await this.client.post("/user/friend/number");
    // console.log("data", data);
    // this.hasDid(did);
    return data;
  }

  // 获取我的好友列表（隐私数据）：
  async userSocialRelationList(pageNum = 1, pageSize = 10) {
    // this.hasDid(did);
    try {
      const data = await this.client.post("/user/social/relation/list", {
        pageNum,
        pageSize,
      });
      // console.log("friendList", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async myToken(did: string) {
    //获取资产API（包括链上链下，UPLINK资产）：
    this.hasDid(did);
  }

  async hasDid(did: string) {
    if (!did) {
      throw new Error("invalid identifier");
    }
  }

  // 邀请落地页获取好友数API：
  async relationPublicInfo(userUid = "") {
    try {
      const data = await this.client.post("/user/relation/public/number", {
        userUid,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 落地页 获取邀请人好友列表 （公开数据)
  async socialRelationPublicList(userUid = "") {
    try {
      const data = await this.client.post("/user/social/relation/public/list", {
        userUid,
      });
      // console.log("socialRelationPublicList", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 用户编辑
  async updateUserInfo(userName = "", userAvatar = "", userGender = 0) {
    try {
      const data = await this.client.post("/user/update", {
        userName,
        userAvatar,
        userGender: Number(userGender),
      });
      // console.log("updateUserInfo", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  //获取资产API
  async assetsShow(
    offChainTokenShow = true,
    onChainTokenShow = true,
    addressShow = true
  ) {
    try {
      const data = await this.client.post("/assets/show", {
        offChainTokenShow,
        onChainTokenShow,
        addressShow,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // claim
  async claimToken() {
    try {
      const data = await this.client.post("/assets/show");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 邀请关系
  async inviteRelation(params: any) {
    try {
      const data = await this.client.post("/user/relation/share/info", params);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 确认好友关系
  async connectFriendShip(inviteUserUid = "", sign = "") {
    try {
      const data = await this.client.post("/user/relation/connect", {
        inviteUserUid,
        sign,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 获取邀请一个人的token数量
  async getTokenNumberWithUser() {
    try {
      const data = await this.client.post("/user/invite/reward/pre");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 获取个人资料明细
  async getAccountRecord(params: any) {
    try {
      const data = await this.client.post("/assets/trans/record", params);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
