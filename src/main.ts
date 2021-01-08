import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store";
import "@/assets/css/tailwind.css";
import ElementPlus from "element-plus";
import "@/assets/theme/index.css";
import ApiService from "@/common/api.service";
ApiService.init();

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
