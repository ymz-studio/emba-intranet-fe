<template>
  <el-form :model="form">
    <el-form-item prop="username">
      <el-input
        v-model="form.identity"
        placeholder="用户名/手机号/邮箱"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        type="password"
        placeholder="密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.keep" label="下次自动登录"></el-checkbox>
      <el-button class="float-right" type="text">忘记密码?</el-button>
    </el-form-item>
    <el-button type="primary" class="w-full" @click="onSubmitClick"
      >立即登录</el-button
    >
  </el-form>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthActions, AuthStore } from "./auth.store";
import { LoginPayload } from "./auth.interfaces";

export default Vue.extend({
  data() {
    return {
      form: {
        identity: "",
        password: "",
        keep: false
      } as LoginPayload
    };
  },
  computed: {
    next() {
      const next = this.$route.query.next;
      if (typeof next === "string") {
        return next;
      } else {
        return undefined;
      }
    }
  },
  methods: {
    async onSubmitClick() {
      await AuthStore.dispatch(AuthActions.LOGIN, this.form);
      this.$router.push(this.next || "/");
    }
  }
});
</script>
