<template>
  <v-container fluid>
    <loading v-if="loading" class="loading"></loading>
    <template v-else>
      <v-row>
        <v-col cols="3">
          <CardWithToolbar title="最新信息">
            <v-container fluid>Hello</v-container>
          </CardWithToolbar>
          <CardWithToolbar class="mt-5" title="食宿安排">
            <v-container fluid>Hello</v-container>
          </CardWithToolbar>
        </v-col>
        <v-col>
          <CardWithToolbar title="即将发生的事">
            <v-container fluid>Hello</v-container>
          </CardWithToolbar>
        </v-col>
        <v-col cols="3">
          <CardWithToolbar title="课程日历">
            <CalendarCourse :data="currentUnit.courses"></CalendarCourse>
          </CardWithToolbar>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { UnitModule } from "@/modules/unit/unit.module";
import { UnitService } from "@/modules/unit/unit.service";
import { UnitItem } from "@/modules/unit/unit.interface";
import CalendarCourse from "@/modules/unit/components/CalendarCourse.vue";
@Component({
  layout: "student",
  components: {
    CalendarCourse
  }
})
export default class extends Vue {
  loading = 0;
  currentUnit: UnitItem | null = null;

  async created() {
    this.loading++;
    this.currentUnit = await UnitService.getCurrentUnit();
    this.loading--;
  }
}
</script>
<style lang="scss" scoped>
.loading {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
