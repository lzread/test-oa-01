<template>
  <div>

    <el-button @click="addHandle">新建</el-button>

    <el-button @click="exportHandle">导出</el-button>
    <el-button @click="uploadHandle">导入</el-button>

    <el-table :data="rows">
      <el-table-column prop="realname" label="真实姓名"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="editHandle(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog width="640px" :visible.sync="dialogVisible" :title="dialogVisibleType == 'add' ? '新建' : '编辑'">

      <el-form :model="items" label-width="80px" label-position="right">

        <el-form-item label="用户名">
          <el-input v-model="items.username"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="items.password"></el-input>
        </el-form-item>

        <el-form-item label="真实姓名">
          <el-input v-model="items.realname"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="items.email"></el-input>
        </el-form-item>

        <el-form-item label="联系电话">
          <el-input v-model="items.phone"></el-input>
        </el-form-item>

        <el-form-item label="自我介绍">
          <el-input v-model="items.introduction"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="commitHandle">提交</el-button>
      </div>

    </el-dialog>

    <el-dialog width="640px" :visible.sync="dialogUploadVisible" title="导入">
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import { getUsers, addUser, updateUser } from "@/api/user";
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
export default {
  name: "users",
  data() {
    return {
      rows: [],
      total: 0,
      items: {},
      dialogVisible: false,
      dialogVisibleType: "add",
      dialogUploadVisible: false,
      listQuery: {
        page: 1,
        limit: 10,
      },
      tableData: [],
      tableHeader: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    uploadHandle() {
      this.dialogUploadVisible = true;
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    },
    exportHandle() {
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = ["ID", "USERNAME"];
        const filterVal = ["id", "username"];
        const list = this.rows;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader, //表头 必填
          data, //具体数据 必填
          filename: "excel-list", //非必填
          autoWidth: true, //非必填
          bookType: "xlsx", //非必填
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },

    async getList() {
      const { data, total } = await getUsers(this.listQuery);
      this.rows = data;
      this.total = total;
    },
    addHandle() {
      this.dialogVisible = true;
      this.dialogVisibleType = "add";
      this.items = {};
    },
    editHandle(row) {
      this.dialogVisible = true;
      this.dialogVisibleType = "edit";
      this.items = row;
    },
    async commitHandle() {
      if (this.dialogVisibleType == "add") {
        await addUser(this.items);
      } else {
        await updateUser(this.items);
      }
      this.dialogVisible = false;
      this.getList();
    },
  },
  components: { UploadExcelComponent },
};
</script>

<style lang="scss" scoped>
</style>
