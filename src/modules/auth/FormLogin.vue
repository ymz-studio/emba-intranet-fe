<template>
  <el-form ref="form" :model="form" :rules="rules" hide-required-asterisk>
    <el-form-item prop="identity" label="账号">
      <el-input
        v-model="form.identity"
        placeholder="请输入用户名/手机号/邮箱"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.keep" label="下次自动登录"></el-checkbox>
      <el-button class="float-right" type="text">忘记密码?</el-button>
    </el-form-item>
    <el-button
      type="success"
      class="w-full"
      :loading="loading > 0"
      @click="onSubmitClick"
      >立即登录</el-button
    >
  </el-form>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthActions, AuthStore } from "./auth.store";
import { LoginPayload } from "./auth.interfaces";
import { ElForm } from "element-ui/types/form";
import { AxiosResponse } from "axios";

export default Vue.extend({
  data() {
    return {
      form: {
        identity: "",
        password: "",
        keep: false
      } as LoginPayload,
      rules: {
        identity: [
          {
            required: true,
            message: "请填写您的账号"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写您的密码"
          }
        ]
      },
      loading: 0
    };
  },
  computed: {
    next(): string | undefined {
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
      const form = this.$refs.form as ElForm;
      if (await form.validate()) {
        this.loading++;
        try {
          await AuthStore.dispatch(AuthActions.LOGIN, this.form);
          this.$router.replace(this.next || "/");
        } catch (error) {
          const res = error.response as AxiosResponse;
          if (res.status === 401) {
            this.$message.error("用户名或密码错误");
          }
        } finally {
          this.loading--;
        }
      }
    }
  }
});
</script>
