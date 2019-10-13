<template>
  <v-container fluid>
    <loading v-if="loading" class="loading"></loading>
    <template v-else>
      <v-row>
        <v-col cols="12" lg="4" md="12" sm="12">
          <CardWithToolbar title="最新信息">
            <ListNotification></ListNotification>
          </CardWithToolbar>
          <CardWithToolbar class="mt-5" title="食宿安排">
            <CardHotel></CardHotel>
          </CardWithToolbar>
        </v-col>
        <v-col cols="12" lg="5" md="12" sm="12">
          <CardWithToolbar title="即将发生的事">
            <ListCourseSoon></ListCourseSoon>
          </CardWithToolbar>
        </v-col>
        <v-col cols="12" lg="3" md="12" sm="12">
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
import { BasicModule } from "@/modules/basic/basic.module";
import { BasicService } from "@/modules/basic/basic.service";

import CalendarCourse from "@/modules/unit/components/CalendarCourse.vue";
import ListCourseSoon from "@/modules/unit/components/ListCourseSoon.vue";
import CardHotel from "@/modules/unit/components/CardHotel.vue";
import ListNotification from "@/modules/basic/components/ListNotification.vue";
@Component({
  layout: "student",
  components: {
    CalendarCourse,
    ListCourseSoon,
    CardHotel,
    ListNotification
  }
})
export default class extends Vue {
  loading = 0;
  unitModule = getModule(UnitModule);
  basicModule = getModule(BasicModule);
  get currentUnit() {
    return this.unitModule && this.unitModule.currentUnit;
  }

  async created() {
    this.loading++;
    this.unitModule.setCurrentUnit(await UnitService.getCurrentUnit());
    this.loading--;
    this.basicModule.setNotificationsLoading(true);
    this.basicModule.setNotifications(
      await BasicService.getUserNotifications()
    );
    this.basicModule.setNotificationsLoading(false);
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
