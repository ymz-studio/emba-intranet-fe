<template>
  <div>
    <v-container>
      <div class="d-flex align-center">
        {{ year }} 年 {{ month }} 月
        <v-spacer></v-spacer>
        <v-btn icon @click="setToday">
          <v-icon>mdi-target</v-icon>
        </v-btn>
        <v-btn icon @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-calendar
      ref="calendar"
      type="month"
      class="calendar-container"
      :now="now"
      v-model="focus"
      short-weekdays
    >
      <template #day-label="{date, day}">
        <div
          class="day-label"
          :class="{ today: isToday(date) }"
          :style="{ backgroundColor: getBackgroundColor(date) }"
        >
          {{ day }}
        </div>
      </template>
    </v-calendar>
    <v-divider></v-divider>
    <v-container>
      <span v-for="item in labels" :key="item.color" class="label-item">
        <v-icon :color="item.color">mdi-circle</v-icon>
        <span>{{ item.name }}</span>
      </span>
    </v-container>
  </div>
</template>
<script lang="ts">
import dayjs from "dayjs";
import { Vue, Component, Prop } from "vue-property-decorator";
import { CourseItem } from "../unit.interface";
import randomcolor from "randomcolor";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

@Component
export default class CalendarCourse extends Vue {
  @Prop({ required: true }) data!: CourseItem[];

  $refs!: {
    calendar: any;
  };

  focus = this.now;

  setToday() {
    this.focus = this.now;
  }

  isToday(date: any) {
    return dayjs(date).format("YYYY-MM-DD") === this.now;
  }

  getBackgroundColor(date: any) {
    for (const item of this.labels) {
      const day = dayjs(date);
      if (day.isBetween(item.range[0], item.range[1], null, "[]")) {
        return item.color;
      }
    }
  }

  get now() {
    return dayjs().format("YYYY-MM-DD");
  }

  get year() {
    return dayjs(this.focus).year();
  }

  get month() {
    return dayjs(this.focus).month() + 1;
  }

  get labels() {
    return this.data.map(item => ({
      ...item,
      color: randomcolor({
        luminosity: "light",
        format: "rgba",
        alpha: 0.5
      })
    }));
  }
}
</script>
<style lang="scss" scoped>
.label-item {
  i {
    font-size: 10px;
    margin-right: 5px;
  }
  font-size: 0.8rem;
  & + & {
    margin-left: 1rem;
  }
}
.day-label {
  line-height: 3;
  font-weight: 500;
}
.calendar-container ::v-deep {
  .v-calendar-weekly__head-weekday {
    border: none !important;
    // border-bottom: 1px solid #efefef;
    line-height: 3;
    font-size: 0.8rem;
  }
  .v-calendar-weekly__day {
    border: none !important;
  }
  .v-outside {
    color: #bcbcbc;
  }
}
.today {
  box-shadow: 0 0 0 2px var(--v-primary-base) inset;
}
</style>
