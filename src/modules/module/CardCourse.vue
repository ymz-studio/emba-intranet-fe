<template>
  <div class="bg-white p-6 shadow">
    <h3 class="mt-0">{{ src.name }}</h3>
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
