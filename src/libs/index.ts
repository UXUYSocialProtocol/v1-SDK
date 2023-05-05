import UYUXGateway from "./gateway";
import UYUXAuth from "./auth";
import UYUXAccount from "./account";
import UYUXSBT from "./sbt";

export default class UYUXClient {
  private gateway: UYUXGateway;
  auth: UYUXAuth;
  account: UYUXAccount;
  sbt: UYUXSBT;

  constructor() {
    this.gateway = new UYUXGateway();
    this.auth = new UYUXAuth(this);
    this.account = new UYUXAccount(this);
    this.sbt = new UYUXSBT(this);
  }

  get<T = any>(uri: string, params: Record<string, any> = {}) {
    return this.gateway.get<T>(uri, params);
  }

  post<T = any>(uri: string, params: Record<string, any> = {}) {
    return this.gateway.post<T>(uri, params);
  }
  // did
}
