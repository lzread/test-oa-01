<template>
  <div>
    <el-button v-permission="'ADD'">新建</el-button>
    <el-button v-permission="'EDIT'">编辑</el-button>

    <pre>{{permission_routes}}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import permission from "@/directive/permission/index.js";
export default {
  computed: {
    ...mapGetters(["permission_routes"]),
  },
  directives: { permission },
};
</script>
