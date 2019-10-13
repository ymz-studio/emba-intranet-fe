<template>
  <v-app>
    <v-app-bar app color="#fff" elevate-on-scroll clipped-left class="app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>EMBA Intranet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <DropdownAuthInfo></DropdownAuthInfo>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      width="200"
      v-model="drawer"
      dark
      color="primary"
      app
      clipped
    >
      <v-list>
        <v-list-item-group active-class="active-menu-item">
          <v-list-item
            link
            :to="item.to"
            v-for="item in menuItems"
            :key="item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-footer color="primary" absolute>&copy; EMBA</v-footer>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DropdownAuthInfo from "@/modules/auth/components/DropdownAuthInfo.vue";
@Component({
  components: {
    DropdownAuthInfo
  }
})
export default class extends Vue {
  drawer = !this.$vuetify.breakpoint.mdAndDown;
  menuItems = [
    {
      title: "课程信息",
      icon: "mdi-file-document-box-multiple",
      to: "/course"
    }
  ];
}
</script>
<style lang="scss" scoped>
.v-app-bar {
  outline: 1px solid rgba(0, 0, 0, 0.12);
}

.active-menu-item {
  background: #c38707;
  font-weight: bold;
}
</style>
