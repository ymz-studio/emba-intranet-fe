<template>
  <layout class="bg-background flex-grow p-0 md:p-6">
    <div v-if="module">
      <el-breadcrumb class="mb-4 text-lg">
        <el-breadcrumb-item to="/module">课程信息</el-breadcrumb-item>
        <el-breadcrumb-item>{{ module.name }}</el-breadcrumb-item>
      </el-breadcrumb>
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
export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    const module = await ModuleService.getModuleInfo(to.params.slug);
    next(vm => {
      vm.$data.module = module;
    });
  },
  components: {
    CarouselImgVue
  },
  data() {
    return {
      module: undefined as ModuleInfo | undefined
    };
  },
  created() {
    this.$parent.$data.header = "课程信息";
  }
});
</script>

<style scoped></style>
