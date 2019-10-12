<template>
  <div v-if="authInfo">{{ authInfo }}</div>
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
}
</script>
<style lang="scss" scoped></style>
