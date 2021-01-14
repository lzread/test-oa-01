<template>
  <div id="SideBar">
    <el-menu
      background-color="#2d3a4b"
      text-color="#eee"
      active-text-color="#fff"
      unique-opened
      router
      :default-active="$route.path"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>办公管理</span>
        </template>
        <el-menu-item index="/work/notice">公告管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar"
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
