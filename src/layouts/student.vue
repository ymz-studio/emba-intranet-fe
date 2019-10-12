<template>
  <v-app>
    <v-app-bar absolute app color="#fff" elevate-on-scroll>
      <v-toolbar-title>EMBA Intranet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
