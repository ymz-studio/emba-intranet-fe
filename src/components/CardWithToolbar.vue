<template>
  <div>
    <v-card>
      <v-toolbar dense flat dark tile color="primary">
        <span class="title">{{ title }}</span>
      </v-toolbar>
      <slot></slot>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class CardWithToolbar extends Vue {
  @Prop({ required: true }) title!: string;
}
</script>
<style lang="scss" scoped></style>
