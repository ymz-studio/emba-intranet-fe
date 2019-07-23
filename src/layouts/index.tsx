import Vue from "vue";

export default Vue.extend({
  name: "Layout",
  props: {
    name: {
      type: String,
      default: "defaultLayout"
    }
  },
  async created() {
    const layout = await import(`../layouts/${this.name}.vue`);
    this.$parent.$emit("update:layout", layout.default);
  },
  render() {
    // @ts-ignore
    return <div>{this.$slots.default[0]}</div>;
  }
});
