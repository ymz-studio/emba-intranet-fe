<template>
  <div>
    <div v-for="item in currentUnit.courses" :key="item.id">
      <v-container fluid>
        <span class="d-block title">{{ item.name }}</span>
        <span class="d-block overline primary--text"
          >{{ item.range[0] }} - {{ item.range[1] }}</span
        >
        <span class="d-block mt-3">{{ item.description }}</span>
      </v-container>
      <v-divider></v-divider>
    </div>
    <ListEmpty v-if="!currentUnit.courses.length"></ListEmpty>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CourseItem } from "../unit.interface";
import { UnitModule } from "../unit.module";
import { getModule } from "vuex-module-decorators";
@Component
export default class ListCourseSoon extends Vue {
  get currentUnit() {
    const unitModule = getModule(UnitModule);
    return unitModule.currentUnit;
  }
}
</script>
<style lang="scss" scoped></style>
