<template>
  <div class="list-container">
    <loading v-if="loading" class="loading-container"></loading>
    <div v-for="item in list" :key="item.id">
      <div class="d-flex justify-space-between align-center pa-3">
        <span>{{ item.content }}</span>
        <div class="caption grey--text">
          <span class="mr-4">{{ item.datetime | date }}</span>
          <span>{{ item.datetime | time }}</span>
        </div>
      </div>
      <v-divider></v-divider>
    </div>
    <ListEmpty v-if="!list.length"></ListEmpty>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { BasicModule } from "../basic.module";
import dayjs from "dayjs";

@Component({
  filters: {
    date(value: string) {
      return dayjs(value).format("YYYY-MM-DD");
    },
    time(value: string) {
      return dayjs(value).format("HH:mm:ss");
    }
  }
})
export default class ListNotification extends Vue {
  basicModule = getModule(BasicModule);

  get list() {
    return this.basicModule.notifications;
  }

  get loading() {
    return this.basicModule.notificationsLoading;
  }
}
</script>
<style lang="scss" scoped>
.loading-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-container {
  max-height: 300px;
  overflow-y: auto;
}
</style>
