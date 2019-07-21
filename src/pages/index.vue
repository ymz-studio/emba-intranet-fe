<template>
  <div>
    Hi {{ me }}
    <template v-if="curModul">
      <template v-if="curModul.courses">
        <card-course-vue
          v-for="item in curModul.courses"
          :key="item.id"
          :src="item"
        ></card-course-vue>
      </template>
      <card-hotel-vue :src="curModul.hotel"></card-hotel-vue>
      <template v-if="curModul.activities">
        <card-activity-vue
          v-for="item in curModul.activities"
          :key="item.id"
          :src="item"
        ></card-activity-vue>
      </template>
    </template>
    <calendar-schedule-vue></calendar-schedule-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthStore } from "../modules/auth/auth.store";
import CardCourseVue from "../modules/module/CardCourse.vue";
import { ModuleStore } from "../modules/module/module.store";
import CardHotelVue from "../modules/module/CardHotel.vue";
import CardActivityVue from "../modules/module/CardActivity.vue";
import CalendarScheduleVue from "../modules/module/CalendarSchedule.vue";
export default Vue.extend({
  metaInfo: {
    title: "Home"
  },
  components: {
    CardCourseVue,
    CardHotelVue,
    CardActivityVue,
    CalendarScheduleVue
  },
  computed: {
    me() {
      return AuthStore.state.me;
    },
    // 当前的模块信息
    curModul() {
      return ModuleStore.state.curModule;
    }
  }
});
</script>

<style scoped></style>
