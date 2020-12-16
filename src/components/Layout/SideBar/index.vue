<template>

    <div id="SideBar">

        <el-menu background-color="#212121" text-color="#ccc" active-text-color="#ffd04b" unique-opened router :default-active="$route.path">
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
    name: "SideBar",
};
</script>


<style lang="scss" scoped>
#SideBar {
    width: 200px;
    height: calc(100% - 55px);
    position: fixed;
    left: 0;
    top: 55px;
    background: #212121;
}
</style>