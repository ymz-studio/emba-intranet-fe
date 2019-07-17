<template>
  <el-form :model="form">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-full" @click="onSubmitClick"
        >立即登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthActions, AuthStore } from "./auth.store";

export default Vue.extend({
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmitClick() {
      AuthStore.dispatch(AuthActions.LOGIN, this.form);
    }
  }
});
</script>