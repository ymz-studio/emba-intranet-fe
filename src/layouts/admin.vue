<template>
  <div>
    后台版布局
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  metaInfo: {
    titleTemplate: "%s | EMBA Intranet Admin"
  }
});
</script>