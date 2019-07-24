<template>
  <layout class="bg-background flex-grow p-0 md:p-6">
    <template #header>
      <span class="text-lg ml-4">
        控制台
      </span>
    </template>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12" :lg="14" :xl="16">
        <template v-if="curModul">
          <template v-if="curModul.courses">
            <card-course-vue
              v-for="item in curModul.courses"
              :key="item.id"
              :src="item"
            ></card-course-vue>
          </template>
          <div v-if="curModul.activities" class="mt-4">
            <card-activity-vue
              v-for="item in curModul.activities"
              :key="item.id"
              :src="item"
            ></card-activity-vue>
          </div>
        </template>
      </el-col>
      <el-col :sm="24" :md="12" :lg="10" :xl="8">
        <card-hotel-vue
          v-if="curModul"
          class="mb-4"
          :src="curModul.hotel"
        ></card-hotel-vue>
        <calendar-schedule-vue></calendar-schedule-vue>
      </el-col>
    </el-row>
  </layout>
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
