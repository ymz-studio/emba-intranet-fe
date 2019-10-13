import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/plugins/role";

import Loading from "@/components/Loading.vue";
import CardWithToolbar from "@/components/CardWithToolbar.vue";

Vue.config.productionTip = false;

Vue.component("Loading", Loading);
Vue.component("CardWithToolbar", CardWithToolbar);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
