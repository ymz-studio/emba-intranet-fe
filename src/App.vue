<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="postcss">
@tailwind components;
@tailwind utilities;

#app {
  @apply text-gray-900 antialiased subpixel-antialiased font-sans;
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}
</style>
