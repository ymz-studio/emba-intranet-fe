<template>
  <div>
    <div class="max-w-lg mx-auto shadow p-8">
      <h3 class="mb-8">用户登录</h3>
      <form-login-vue></form-login-vue>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormLoginVue from "@/modules/auth/FormLogin.vue";
export default Vue.extend({
  metaInfo: {
    title: "Home"
  },
  components: {
    FormLoginVue
  }
});
</script>

<style scoped></style>
