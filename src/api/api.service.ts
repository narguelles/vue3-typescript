import { API_URL } from "@/common/config.service";
import jwtService from "@/common/jwt.service";
import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";

const app = createApp({});

export const ApiService = {
  init(): void {
    app.use(VueAxios, axios);
    app.axios.defaults.baseURL = API_URL;
  },
  setHeader(): void {
    app.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtService.getToken()}`;
  },
  setCredentials() {
    axios.defaults.withCredentials = true;
  },
  get(resource: string, slug: string = "") {
    let params = "";
    if (slug) params = `/${slug}`;
    return app.axios.get(`${resource}${params}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  query<T>(resource: string, params: T) {
    return app.axios.get(resource, { params: params }).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  post<T>(resource: string, params: T) {
    return app.axios.post(`${resource}`, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  put<T>(resource: string, params: T) {
    return app.axios.put(`${resource}`, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  delete(resource: string, slug: string = "") {
    let params = "";
    if (slug) params = `/${slug}`;
    return app.axios.delete(`${resource}${params}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};
