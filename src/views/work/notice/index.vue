<template>

  <div>

    <el-button
      type="primary"
      @click="addHandle"
    >新建</el-button>

    <el-table
      :data="rows"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="release_time"
        label="发布时间"
      >
      </el-table-column>
    </el-table>

  </div>

</template>



<script>
import { list } from "@/api/notice";
export default {
  name: "Notice",
  data() {
    return {
      rows: [],
      items: {},
      dialogVisble: false,
      dialogVisbleType: "",
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data, total } = await list(this.listQuery);
      this.total = total;
      this.rows = data;
    },
    addHandle() {},
  },
};
</script>


<style lang="scss" scoped>
</style>