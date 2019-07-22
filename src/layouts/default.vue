<template>
  <div class="layout">
    <div v-show="trigger" class="mask" @click="trigger = false"></div>
    <div id="sidebar" class="sidebar" :class="{ active: trigger }">
      <div class="sidebar-toolbar">
        <router-link to="/">
          <h3>EMBA Intranet</h3>
        </router-link>
      </div>
      <h4 class="sub-header">
        MENU
      </h4>
      <router-link
        v-for="item in navs"
        :key="item.to"
        :to="item.to"
        class="link"
      >
        {{ item.text }}
      </router-link>
    </div>
    <div class="main">
      <div class="toolbar">
        <span
          class="trigger"
          :class="{ active: trigger }"
          @click="trigger = !trigger"
        >
          <el-icon v-if="trigger" class="el-icon-s-fold"></el-icon>
          <el-icon v-else class="el-icon-s-unfold"></el-icon>
        </span>
        <span class="header">
          {{ header }}
        </span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthStore } from "../modules/auth/auth.store";
import { AuthService } from "../modules/auth/auth.service";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

interface HeaderMap {
  [key: string]: string;
}

const HEADER_MAP: HeaderMap = {
  index: "首页",
  "module-index": "课程信息"
};

export default Vue.extend({
  metaInfo: {
    titleTemplate: "%s | EMBA Intranet"
  },
  data() {
    return {
      trigger: false
    };
  },
  computed: {
    navs() {
      const me = AuthStore.state.me;
      if (!me) {
        return [];
      } else {
        return AuthService.getNavItems(me);
      }
    },
    header(): string | undefined {
      return this.$route.name && HEADER_MAP[this.$route.name];
    }
  },
  watch: {
    $route() {
      this.trigger = false;
    },
    trigger(val: boolean) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        if (val) {
          disableBodyScroll(sidebar);
        } else {
          enableBodyScroll(sidebar);
        }
      }
    }
  }
});
</script>

<style lang="postcss" scoped>
.layout {
  --width-sidebar: 14rem;
  --const-width-sidebar: 14rem;
  --height-toolbar: 4rem;
}

@media screen and (max-width: 1024px) {
  .layout {
    --width-sidebar: 0;
  }
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    z-index: 5;
    &.active {
      transform: translateX(0);
    }
  }
  .trigger {
    display: inline !important;
  }
}

.main {
  @apply min-h-screen flex flex-col;
  padding-left: var(--width-sidebar);
  padding-top: var(--height-toolbar);
}
.toolbar {
  @apply fixed top-0 bg-white right-0 border-solid border-2 border-gray-200;
  left: var(--width-sidebar);
  height: var(--height-toolbar);
  z-index: 3;
}
.sidebar {
  @apply fixed left-0 top-0 bottom-0 text-white px-6;
  width: var(--const-width-sidebar);
  background: #252529;
}
.sidebar-toolbar {
  @apply overflow-hidden border-0 border-b-2 border-solid border-gray-800;
  height: var(--height-toolbar);
}
a {
  @apply no-underline text-white;
}
.link {
  @apply p-3 px-3 -mx-2 block rounded;
  &:hover:not(.router-link-active) {
    @apply text-primary;
  }
  & + & {
    @apply mt-2;
  }
  &.router-link-active {
    @apply bg-primary;
  }
}
.sub-header {
  @apply text-gray-600 font-normal text-sm;
}
.trigger {
  @apply cursor-pointer text-xl pl-6;
  line-height: var(--height-toolbar);
  z-index: 4;
  display: none;
}
.mask {
  @apply fixed left-0 top-0 right-0 bottom-0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 4;
}
.header {
  @apply pl-6 text-lg font-bold text-gray-700;
  line-height: var(--height-toolbar);
}
</style>
