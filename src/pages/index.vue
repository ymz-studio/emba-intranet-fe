<template>
  <div>Hi {{ me }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthStore } from "../modules/auth/auth.store";
export default Vue.extend({
  layout: "student",
  metaInfo: {
    title: "Home"
  },
  computed: {
    me() {
      return AuthStore.state.me;
    }
  }
});
</script>

<style scoped></style>
