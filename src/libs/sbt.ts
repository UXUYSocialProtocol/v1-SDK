// SBT管理模块
import UYUXClint from "./index";

export default class UYUXSBT {
  private client: UYUXClint;

  constructor(client: UYUXClint) {
    this.client = client;
  }

  //当前全网数据和挖矿速率API（gas）:
  async posSpeed(params: any) {
    // gas计算公式
    try {
      const data = await this.client.post("/assets/claim/pre", params);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 查询SBT
  async getSBT(did: string) {
    this.hasDid(did);
  }

  // 声明SBT
  async createSBT(did: string) {
    this.hasDid(did);
  }

  // 更新SBT 上链
  async updateSBT(sign: string) {
    try {
      const data = this.client.post("/assets/claim", { sign });
      if (data) {
        return data;
      }
    } catch (error) {
      console.error("updateSBT error:", error);
    }
  }

  async hasDid(did: string) {
    if (!did) {
      throw new Error("invalid identifier");
    }
  }
}
