<template>
  <div class="min-h-screen flex flex-col md:justify-center md:bg-background">
    <div class="mx-auto bg-white md:shadow flex rounded overflow-hidden">
      <div class="left">
        <h3 class="mt-0">Hi 请登录</h3>
        <form-login-vue></form-login-vue>
      </div>
      <div class="right hidden md:flex text-white flex-col justify-end px-4">
        <h3 class="mb-0">Welcome to EMBA Intranet</h3>
        <p class="mt-2">blabla...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormLoginVue from "@/modules/auth/FormLogin.vue";
export default Vue.extend({
  layout: "empty",
  metaInfo: {
    title: "Login"
  },
  components: {
    FormLoginVue
  }
});
</script>

<style lang="postcss" scoped>
.left {
  @apply p-6;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
}
.right {
  width: 500px;
  background: url("../assets/login-bg.jpg") center;
  background-size: cover;
}
</style>
