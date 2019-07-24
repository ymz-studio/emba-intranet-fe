import Vue from "vue";
import { forEach } from "lodash-es";

export declare class DynamicsLayout extends Vue {
  name: string;
  renderSlots: () => void;
}

export default Vue.extend({
  name: "Layout",
  props: {
    name: {
      type: String,
      default: "defaultLayout"
    }
  },
  watch: {
    $slots: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.renderSlots();
        });
      }
    },
    name: {
      immediate: true,
      async handler() {
        const layout = await import(`./${this.name}.vue`);
        this.$parent.$emit("update:layout", layout.default);
      }
    }
  },
  methods: {
    renderSlots() {
      forEach(this.$slots, (item, key) => {
        if (key !== "default" && item) {
          this.$parent.$parent.$slots[key] = item;
          this.$parent.$parent.$forceUpdate();
        }
      });
    }
  },
  render() {
    return <div>{this.$slots.default}</div>;
  }
});
