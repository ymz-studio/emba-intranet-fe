<template>
  <div v-loading="!schedule">
    <div id="calendar"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Calendar } from "@fullcalendar/core";
import daygrid from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// @ts-ignore
// import zhLocale from "@fullcalendar/core/locales/zh-cn";
import { ModuleStore, ModuleMutations, ModuleActions } from "./module.store";
import { ModuleScheduleItem } from "./module.interfaces";
import day from "dayjs";

export default Vue.extend({
  data() {
    return {
      calendar: undefined as Calendar | undefined,
      loading: 0
    };
  },
  computed: {
    schedule() {
      return ModuleStore.state.schedule;
    }
  },
  watch: {
    schedule: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.init(val);
          });
        }
      }
    }
  },
  methods: {
    // 初始化日历
    init(schedule: ModuleScheduleItem[]) {
      const calendarEl = document.getElementById("calendar");
      if (calendarEl) {
        const calendar = new Calendar(calendarEl, {
          plugins: [daygrid, listPlugin],
          header: {
            left: "title",
            center: "",
            right: "dayGridMonth,listWeek prev,next"
          },
          events: schedule.map(item => ({
            id: item.slug,
            title: item.name,
            start: item.range[0],
            end: item.range[1]
          })),
          // locale: zhLocale,
          columnHeaderFormat(column) {
            return "日一二三四五六"[day(column.date.marker).day()];
          },
          eventClick: info => {
            this.onModuleClick(info.event.id);
          }
        });
        this.calendar = calendar;
        this.calendar.render();
      }
    },
    onModuleClick(slug: string) {
      this.$router.push("/module/" + slug);
    }
  }
});
</script>

<style lang="postcss" scoped>
#calendar >>> {
  .fc-button-primary {
    @apply bg-primary outline-none border-primary;
    box-shadow: none;
  }

  .fc-button-primary:active {
    @apply bg-blue-600;
  }

  .fc-button-active {
    @apply bg-blue-600;
  }

  .fc-today {
    @apply bg-gray-300;
  }
  .fc-event,
  .fc-event-dot {
    @apply cursor-pointer bg-green-500 border-0 text-base;

    &:hover {
      @apply bg-green-400;
    }
  }
  .fc-list-item {
    @apply cursor-pointer;
  }
}
</style>
