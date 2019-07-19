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

/* purgecss start ignore */
@import "./assets/nprogress.css";
@import "./assets/app.css";
@import "../node_modules/@fullcalendar/core/main.css";
@import "../node_modules/@fullcalendar/daygrid/main.css";
@import "../node_modules/@fullcalendar/list/main.css";
/* purgecss end ignore */

</style>
