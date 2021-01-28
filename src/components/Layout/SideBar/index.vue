<template>
  <div id="SideBar">
    <el-menu
      background-color="#2d3a4b"
      text-color="#eee"
      active-text-color="#f60"
      unique-opened
      router
      :default-active="$route.path"
    >

      <sidebar-item :items="permission_routes"></sidebar-item>

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  name: "SideBar",
  computed: {
    ...mapGetters(["permission_routes"]),
  },
  components: { SidebarItem },
};
</script>

<style lang="scss" scoped>
#SideBar {
  width: 200px;
  height: calc(100% - 55px);
  position: fixed;
  left: 0;
  top: 55px;
  background: #2d3a4b;
  .el-menu {
    border: 0;
  }
}
</style>
