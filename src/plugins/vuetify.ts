import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";
// @ts-ignore
import { Intersect } from "vuetify/lib/directives";
import zhHans from "vuetify/src/locale/zh-Hans";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  },
  directives: {
    Intersect
  }
});
Vue.use(VuetifyToast);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: "zh-Hans"
  },
  icons: {
    iconfont: "mdi"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#0060df"
      }
    }
  }
});
