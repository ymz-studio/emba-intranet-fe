<template>
  <div>
    <slot></slot>
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
