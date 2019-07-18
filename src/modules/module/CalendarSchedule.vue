<template>
	<div v-loading="loading > 0">
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
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/list/main.css";
export default Vue.extend({
	data() {
		return {
			calendar: undefined as Calendar | undefined,
			loading: 0
		};
	},
	async mounted() {
		const calendarEl = document.getElementById("calendar");
		if (calendarEl) {
			const calendar = new Calendar(calendarEl, {
				plugins: [daygrid, listPlugin],
				header: {
					left: "title",
					center: "",
					right: "dayGridMonth,listWeek prev,next"
				},
				// locale: zhLocale,
				columnHeaderFormat(column) {
					return "日一二三四五六"[day(column.date.marker).day()];
				},
				eventClick: (info) => {
					this.onModuleClick(info.event.id);
				}
			});
			calendar.render();
			this.calendar = calendar;
			// 监听日程表更新
			ModuleStore.subscribe((mutation, state) => {
				if (mutation.type === ModuleMutations.SET_SCHEDULE) {
					if (state.schedule) {
						this.setEvent(state.schedule);
					}
				}
			});
			// 加载日程表数据
			this.loading++;
			await ModuleStore.dispatch(ModuleActions.LOAD_SCHEDULE);
			this.loading--;
		}
	},
	methods: {
		/**
		 * 设置日历事件
		 * @param schedule 日程表数据
		 */
		setEvent(schedule: ModuleScheduleItem[]) {
			schedule.forEach(item => {
				this.calendar &&
					this.calendar.addEvent({
						id: item.slug,
						title: item.name,
						start: item.range[0],
						end: item.range[1]
					});
			});
		},
		onModuleClick(slug: string) {

		}
	}
});
</script>

<style lang='postcss' scoped>
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