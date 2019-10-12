<template>
  <div>
    <div class="form-container">
      <FormLoginLocal></FormLoginLocal>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormLoginLocal from "@/modules/auth/components/FormLoginLocal.vue";

@Component({
  layout: "empty",
  components: {
    FormLoginLocal
  }
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.form-container {
  max-width: 900px;
  padding: 3em;
}
</style>
