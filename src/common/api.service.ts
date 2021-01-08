import { createApp } from "vue";
import axios, { AxiosResponse } from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const app = createApp({});

const ApiService = {
  init(): void {
    app.use(VueAxios, axios);
    app.axios.defaults.baseURL = API_URL;
  },

  setHeader(): void {
    app.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  get(
    resource: string,
    slug = ""
  ): Promise<AxiosResponse<Record<string, unknown>>> {
    return app.axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  query(
    resource: string,
    params: Record<string, unknown>
  ): Promise<AxiosResponse<Record<string, unknown>>> {
    return app.axios.get(resource, { params: params }).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const CountApi = {
  get(): Promise<AxiosResponse<Record<string, unknown>>> {
    return ApiService.get("/api/stackedbar-devices");
  },
};
