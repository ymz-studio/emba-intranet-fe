<template>
  <div v-if="module">
    {{ module }}
    <carousel-img-vue :src="module.imgs"></carousel-img-vue>
  </div>
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
  }
});
</script>

<style scoped></style>
