import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface ReqInterceptors<T = AxiosResponse> {
  requestSucessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestErrorFn?: (err: any) => any;
  responseSucessFn?: (res: T) => T;
  responseErrorFn?: (err: any) => any;
}

interface ReqConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ReqInterceptors<T>;
}

//封装axios
class Req {
  instance: AxiosInstance;

  constructor(config: ReqConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局请求拦截");

        return config;
      },
      (err) => {
        console.log(err);
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局响应拦截");

        return res.data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.instance.interceptors.request.use(
      config.interceptors?.requestSucessFn,
      config.interceptors?.requestErrorFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSucessFn,
      config.interceptors?.responseErrorFn
    );
  }

  request<T = any>(config: ReqConfig<T>) {
    if (config.interceptors?.requestSucessFn) {
      config = config.interceptors.requestSucessFn(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSucessFn) {
            res = config.interceptors.responseSucessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config: AxiosRequestConfig) {
    return this.request({ method: "GET", ...config });
  }
  post(config: AxiosRequestConfig) {
    return this.request({ method: "POST", ...config });
  }
}

export default Req;
