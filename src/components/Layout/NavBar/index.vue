<template>
  <div id="NavBar">
    {{name}}
    <el-button @click="exit">exit</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters({
      name: "name",
      avatar: "avatar",
    }),
  },
  methods: {
    exit() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#NavBar {
  width: 100%;
  height: 55px;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 99;
  border-bottom: 1px solid #ccc;
}
</style>
