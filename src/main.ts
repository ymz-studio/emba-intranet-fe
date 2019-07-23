import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element-ui.ts";
import "./plugins/vue-meta";
import "./style.pcss";
import Layout from "@/layouts/index.tsx";

Vue.config.productionTip = false;
Vue.component("layout", Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
