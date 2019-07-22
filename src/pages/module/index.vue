<template>
  <div>
    <div>
      已完成课程:
      <template v-if="completedCourses">
        <card-course-vue
          v-for="item in completedCourses"
          :key="item.id"
          :src="item"
        ></card-course-vue>
      </template>
    </div>
    <div>
      未完成课程:
      <template v-if="unCompleteCourses">
        <card-course-vue
          v-for="item in unCompleteCourses"
          :key="item.id"
          :src="item"
        ></card-course-vue>
      </template>
    </div>
    <calendar-schedule-vue></calendar-schedule-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { UserStore } from "@/modules/user/user.store";
import CalendarScheduleVue from "@/modules/module/CalendarSchedule.vue";
import CardCourseVue from "@/modules/module/CardCourse.vue";
import { UserCourse } from "@/modules/user/user.interfaces";
export default Vue.extend({
  components: {
    CalendarScheduleVue,
    CardCourseVue
  },
  metaInfo: {
    title: "课程信息"
  },
  computed: {
    // 全部课程
    courses(): UserCourse[] | undefined {
      return UserStore.state.courses;
    },
    // 已完成的课程
    completedCourses(): UserCourse[] | undefined {
      if (this.courses) {
        return this.courses.filter(item => item.isCompleted);
      }
      return undefined;
    },
    // 未完成的课程
    unCompleteCourses(): UserCourse[] | undefined {
      if (this.courses) {
        return this.courses.filter(item => !item.isCompleted);
      }
      return undefined;
    }
  }
});
</script>

<style scoped></style>
