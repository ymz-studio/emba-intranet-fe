<template>
  <div class="bg-white p-6 shadow">
    {{ src }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Course, Activity } from "./module.interfaces";

export default Vue.extend({
  props: {
    src: {
      type: Object as () => Activity,
      required: true
    }
  }
});
</script>

<style scoped></style>
