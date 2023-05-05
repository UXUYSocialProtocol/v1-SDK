export interface UserInfo {
  nickname: string; // social account nickname
  avatar: string;
  gender: number; //
  location: string; // lang long
  bio: string; //
}

// export type TorusGenericObject = {
//   [key: string]: string;
// };

export type WebAuthnExtraParams = {
  signature?: string;
  clientDataJSON?: string;
  authenticatorData?: string;
  publicKey?: string;
  challenge?: string;
  rpOrigin?: string;
  credId?: string;
  transports?: AuthenticatorTransport[];
};

export interface UYUXResponse {
  email: string;
  name: string;
  profileImage: string;
  aggregateVerifier?: string;
  verifier: string;
  verifierId: string;
  typeOfLogin: "LOGIN_TYPE";
  ref?: string;
  registerOnly?: boolean;
  extraVerifierParams?: WebAuthnExtraParams;
}

// login
export interface LoginSocialResponse {
  accessToken: string;
  idToken?: string;
  did: string;
}

export interface UYUXLoginHandler {
  clientId: string;
  nonce: string;
  finalURL: URL;
  getUserInfo(params: LoginSocialResponse): Promise<UYUXResponse>;
  // handleLoginWindow(params: {
  //   locationReplaceOnRedirect?: boolean;
  //   popupFeatures?: string;
  // }): Promise<LoginSocialResponse>;
}

export enum LoginAuthType {
  wx = 0,
  whatsapp = 1,
  tg = 2,
}
