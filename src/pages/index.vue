<template>
  <div>
    Hi {{ me }}
    <form-login-vue></form-login-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthStore } from "../modules/auth/auth.store";
import FormLoginVue from "../modules/auth/FormLogin.vue";
export default Vue.extend({
  layout: "student",
  metaInfo: {
    title: "Home"
  },
  components: {
    FormLoginVue
  },
  computed: {
    me() {
      return AuthStore.state.me;
    }
  }
});
</script>

<style scoped></style>
