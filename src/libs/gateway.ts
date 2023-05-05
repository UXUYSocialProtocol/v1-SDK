import axios, { type AxiosInstance } from "axios";
import { refresh } from "@/utils";
const dev = 'https://testuyuxapi.xws.cn'
const pro = 'https://apiuxuy.xws.cn'
export default class UYUXGateway {
  private APIKey = 1;
  private request: AxiosInstance;
  constructor() {
    this.request = axios.create({
      baseURL:import.meta.env.VITE_APP_API_BASE_URL
        // import.meta.env.MODE === "dev" || import.meta.env.MODE === "development"
        //   ? dev
        //   : pro,
    });
    this.request.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        // console.log("error.response", error.response);
        switch (error.response.status) {
          case 401:
            // console.log("token 过期");
            const tokenId = localStorage.getItem("accessToken")
              ? JSON.stringify(localStorage.getItem("accessToken"))
              : "";

            if (tokenId) {
              refresh();
            }
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );
  }

  // post 请求
  async post<T = any>(uri: string, params: Record<string, any> = {}) {
    const { data } = await this.request.post(uri, params, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "x-language": localStorage.getItem("lang")
          ? localStorage.getItem("lang")
          : "",
      },
    });
    if (data) {
      if (data.code == 5002006) {
        return data as T;
      }
      if (!data.success) {
        return Promise.reject(data);
      }
      return data.data as T;
    }
  }

  // get 请求
  async get<T = any>(uri: string, params: Record<string, any> = {}) {
    const { data } = await this.request.get(uri, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "x-language": localStorage.getItem("lang")
          ? localStorage.getItem("lang")
          : "",
      },
    });
    if (!data.success) {
      return Promise.reject(data);
    }
    return data.data as T;
  }
}
