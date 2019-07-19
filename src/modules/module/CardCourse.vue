<template>
  <div>
    {{ src }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Course } from "./module.interfaces";

export default Vue.extend({
  props: {
    src: {
      type: Object as () => Course,
      required: true
    }
  }
});
</script>

<style scoped></style>
