<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  metaInfo: {
    titleTemplate: "%s | EMBA Intranet"
  }
});
</script>
