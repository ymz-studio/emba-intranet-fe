<template>
  <v-menu v-if="authInfo" offset-y>
    <template #activator="{on}">
      <v-btn text v-on="on">
        {{ authInfo.username }}
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list dense subheader>
      <v-subheader>{{ authInfo.email }}</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item to="/">
          <v-list-item-title>
            <v-icon>mdi-account-outline</v-icon>个人中心
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="onLogout">
          <v-list-item-title>
            <v-icon>mdi-logout</v-icon>注销
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AuthModule } from "../auth.module";
import { getModule } from "vuex-module-decorators";
@Component
export default class DropdownAuthInfo extends Vue {
  get authInfo() {
    const authModule = getModule(AuthModule);
    return authModule.me;
  }

  onLogout() {
    this.$router.push("/auth/login");
  }
}
</script>
<style lang="scss" scoped></style>
