<template>
  <el-tag type="success" size="small" effect="dark">
    {{ text }}
  </el-tag>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthService } from "./auth.service";

export default Vue.extend({
  props: {
    role: {
      type: String,
      required: true
    }
  },
  computed: {
    text(): string {
      return AuthService.getRoleText(this.role);
    }
  }
});
</script>

<style scoped></style>
