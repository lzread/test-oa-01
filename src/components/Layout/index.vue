<template>

  <div id="Layout">

    <nav-bar />

    <side-bar />

    <app-main />


  </div>

</template>



<script>
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import AppMain from "./AppMain";

export default {
  name: "Layout",
  components: { NavBar, SideBar, AppMain },
};
</script>


<style lang="scss" scoped>

#Layout{
    padding: 0 0 0 200px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

</style>