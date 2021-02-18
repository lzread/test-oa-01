<template>
  <div id="NavBar">
    <span class="usename">{{name}}</span>
    <lang-select class="set-language" />
    <el-button class="exit" icon="el-icon-close" type="danger" size="mini" @click="exit"></el-button>
  </div>
</template>

<script>
import LangSelect from "@/components/LangSelect";
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
        location.reload();
      });
    },
  },
  components: { LangSelect },
};
</script>

<style lang="scss" scoped>
#NavBar {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 99;
  border-bottom: 1px solid #ccc;
  .usename {
    flex-grow: 1;
    text-align: right;
  }
  .exit {
    height: 20px;
  }
}
</style>
