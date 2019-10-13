<template>
  <v-container>
    <v-list dense>
      <v-subheader>住宿安排</v-subheader>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">mdi-map-marker</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          >地点: {{ currentUnit.hotel.location }}</v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">mdi-briefcase-check</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          >入住时间: {{ currentUnit.hotel.range[0] }} 后</v-list-item-title
        >
        <v-list-item-action-text>
          <v-btn small text color="primary">调整</v-btn>
        </v-list-item-action-text>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">mdi-briefcase-check</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          >退房时间: {{ currentUnit.hotel.range[1] }} 前</v-list-item-title
        >
        <v-list-item-action-text>
          <v-btn small text color="primary">调整</v-btn>
        </v-list-item-action-text>
      </v-list-item>
      <v-subheader>膳食安排</v-subheader>
      <div>
        {{ currentUnit.hotel.food }}
      </div>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Hotel } from "../unit.interface";
import { getModule } from "vuex-module-decorators";
import { UnitModule } from "../unit.module";
@Component
export default class CardHotel extends Vue {
  unitModule = getModule(UnitModule);

  get currentUnit() {
    return this.unitModule && this.unitModule.currentUnit;
  }
}
</script>
<style lang="scss" scoped></style>
