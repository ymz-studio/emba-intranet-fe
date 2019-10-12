<template>
  <div>
    <loading v-if="globalLoading" class="global-loading"></loading>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class App extends Vue {
  get globalLoading() {
    return this.$store.state.loading;
  }
}
</script>
<style lang="scss" scoped>
.global-loading {
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
