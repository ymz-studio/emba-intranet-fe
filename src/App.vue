<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout"></router-view>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      layout: "div"
    };
  }
});
</script>

<style lang="postcss">
@tailwind components;
@tailwind utilities;
</style>
