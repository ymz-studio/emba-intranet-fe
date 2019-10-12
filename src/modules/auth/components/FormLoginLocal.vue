<template>
  <div>
    <v-form>
      <v-text-field
        label="邮箱/手机号码"
        v-model="form.identity"
      ></v-text-field>
      <v-text-field
        label="密码"
        type="password"
        v-model="form.password"
      ></v-text-field>
      <div class="d-flex justify-space-between align-center">
        <v-checkbox v-model="form.keep" label="下次自动登录"></v-checkbox>
        <router-link to="/auth/forget">忘记密码?</router-link>
      </div>
      <v-btn
        block
        large
        color="primary"
        @click="onSubmitClick"
        :loading="submitLoading > 0"
        >立即登录</v-btn
      >
    </v-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AuthService } from "../auth.service";
import { AxiosResponse } from "axios";
import { getModule } from "vuex-module-decorators";
import { AuthModule } from "../auth.module";
import { loginNextRouteName } from "@/config";
@Component
export default class FormLoginLocal extends Vue {
  form = {
    identity: "",
    password: "",
    keep: true
  };

  authModule = getModule(AuthModule);

  submitLoading = 0;

  get next() {
    return this.$route.query.next as string;
  }

  async onSubmitClick() {
    this.submitLoading++;
    try {
      await AuthService.login(this.form);
      const authInfo = await AuthService.getAuthInfo();
      this.authModule.setMe(authInfo);
      this.$router.push({
        name: this.next || loginNextRouteName[authInfo.role]
      });
    } catch (error) {
      const res: AxiosResponse = error.response;
      if (res.status === 401) {
        this.$toast.error("用户名或密码错误");
      }
    } finally {
      this.submitLoading--;
    }
  }
}
</script>
<style lang="scss" scoped></style>
