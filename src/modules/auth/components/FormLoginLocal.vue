<template>
  <div>
    <v-form>
      <v-text-field label="邮箱/手机号码"></v-text-field>
      <v-text-field label="密码" type="password"></v-text-field>
      <div class="d-flex justify-space-between align-center">
        <v-checkbox v-model="form.keep" label="下次自动登录"></v-checkbox>
        <router-link to="/auth/forget">忘记密码?</router-link>
      </div>
      <v-btn block large color="primary" @click="onSubmitClick">立即登录</v-btn>
    </v-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class FormLoginLocal extends Vue {
  form = {
    identity: "",
    password: "",
    keep: true
  };

  onForgetClick() {}

  onSubmitClick() {}
}
</script>
<style lang="scss" scoped></style>
