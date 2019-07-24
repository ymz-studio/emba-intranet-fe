<template>
  <layout ref="layout" class="bg-background flex-grow p-0 md:p-6">
    <template #header>
      <el-breadcrumb class="ml-4 text-lg inline-block">
        <el-breadcrumb-item to="/module">课程信息</el-breadcrumb-item>
        <el-breadcrumb-item v-if="module">{{ module.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <div v-if="module">
      {{ module }}
      <carousel-img-vue :src="module.imgs"></carousel-img-vue>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { ModuleService } from "../../modules/module/module.service";
import { ModuleInfo } from "../../modules/module/module.interfaces";
import CarouselImgVue from "../../modules/module/CarouselImg.vue";
import { DynamicsLayout } from "@/layouts";
import Nprogress from "nprogress";
import { MetaInfo } from "vue-meta";
export default Vue.extend({
  components: {
    CarouselImgVue
  },
  data() {
    return {
      module: undefined as ModuleInfo | undefined
    };
  },
  metaInfo(): MetaInfo {
    return {
      title: this.module && this.module.name
    };
  },
  async mounted() {
    Nprogress.start();
    this.module = await ModuleService.getModuleInfo(this.$route.params.slug);
    (this.$refs.layout as DynamicsLayout).renderSlots();
    Nprogress.done();
  }
});
</script>

<style scoped></style>
