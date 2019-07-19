<template>
  <el-carousel ref="carousel" :height="height">
    <el-carousel-item v-for="item in src" :key="item" :auto-play="false">
      <img class="img-item" width="100%" :src="item" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import Vue from "vue";
import { ElCollapse } from "element-ui/types/collapse";
const RATE = 0.8;
export default Vue.extend({
  props: {
    src: {
      type: Array as () => string[],
      default: () => []
    }
  },
  data() {
    return {
      height: "300px"
    };
  },
  mounted() {
    window.addEventListener("resize", this.setHeight);
    this.$nextTick(() => {
      this.setHeight();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setHeight);
  },
  methods: {
    setHeight() {
      const container = this.$refs.carousel as ElCollapse;
      this.height = container.$el.clientWidth * RATE + "px";
    }
  }
});
</script>

<style lang="postcss" scoped>
.img-item {
  object-fit: contain;
  object-position: center;
}
</style>
