<template>
  <div>
    <el-button @click="addRoleHandle">新建角色</el-button>
    <el-table :data="roles">
      <el-table-column
        prop="role_name"
        label="角色名称"
      ></el-table-column>
      <el-table-column
        prop="role_desc"
        label="角色描述"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="userHandle(scope.row)"
          >管理用户</el-button>
          <el-button
            type="text"
            @click="editRoleHandle(scope.row)"
          >编辑角色</el-button>
          <el-button
            type="text"
            @click="deleteRoleHandle(scope.row)"
          >删除角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getRoles"
    />

    <el-dialog
      width="400px"
      :visible.sync="dialogVisibleRole"
      :title="dialogVisibleRoleType == 'add' ? '新增角色' : '编辑角色' "
    >

      <el-form
        :model="role"
        label-width="100px"
        label-position="right"
      >

        <el-form-item label="角色名称">
          <el-input
            v-model="role.role_name"
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item label="角色代码">
          <el-input
            v-model="role.role_code"
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item label="角色描述">
          <el-input
            v-model="role.role_desc"
            placeholder="请输入"
            type="textarea"
          ></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer">
        <el-button @click="dialogVisibleRole = false">取消</el-button>
        <el-button @click="saveRole()">提交</el-button>
      </div>

    </el-dialog>

    <el-dialog
      width="600px"
      :visible.sync="dialogVisibleUser"
      title="关联用户"
    >
      <el-table :data="users">
        <el-table-column
          prop="username"
          label="用户名"
        ></el-table-column>
        <el-table-column
          prop="realname"
          label="真实姓名"
        ></el-table-column>
        <el-table-column label="操作">

          <template slot-scope="scope">
            <el-button
              type="primary"
              v-if="isCurrent(scope.row)"
              @click="addUserRoleHandle(scope.row)"
            >添加</el-button>
            <el-button
              v-else
              @click="deleteUserRoleHandle(scope.row)"
            >取消</el-button>
          </template>

        </el-table-column>
      </el-table>
      <pagination
        v-show="userTotal > 0"
        :total="userTotal"
        :page.sync="userListQuery.page"
        :limit.sync="userListQuery.limit"
        @pagination="getUserList"
      />

    </el-dialog>

  </div>
</template>

<script>
import {
  getRoles,
  addRole,
  updateRole,
  deleteRole,
  addUserRole,
  deleteUserRole,
} from "@/api/role";
import { getUsers } from "@/api/user";
import Pagination from "@/components/Pagination";
export default {
  name: "roles",
  data() {
    return {
      roles: [],
      role: {},
      dialogVisibleRole: false,
      dialogVisibleRoleType: "add",
      dialogVisibleUser: false,
      users: [],
      role_id: "",
      userTotal: 0,
      userListQuery: {
        page: 1,
        limit: 10,
        keyword: "",
      },
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        keyword: "",
      },
    };
  },
  created() {
    this.getRoles();
    this.getUserList();
  },
  methods: {
    isCurrent(row) {
      if (row.role_ids) {
        const ids = row.role_ids.split(",");
        const role_id = this.role_id.toString();

        if (ids.includes(role_id)) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    async addUserRoleHandle(row) {
      await addUserRole({
        user_id: row.id,
        role_id: this.role_id,
      });
      this.getUserList();
    },
    async deleteUserRoleHandle(row) {
      await deleteUserRole({
        user_id: row.id,
        role_id: this.role_id,
      });
      this.getUserList();
    },
    userHandle(row) {
      this.dialogVisibleUser = true;
      this.role_id = row.id;
    },
    async getUserList() {
      const { data, total } = await getUsers(this.userListQuery);
      this.users = data;
      this.userTotal = total;
    },
    async getRoles() {
      const { data, total } = await getRoles(this.listQuery);
      this.roles = data;
      this.total = total;
    },
    addRoleHandle() {
      this.dialogVisibleRole = true;
      this.dialogVisibleRoleType = "add";
      this.role = {};
    },
    editRoleHandle(row) {
      this.dialogVisibleRole = true;
      this.dialogVisibleRoleType = "edit";
      this.role = row;
    },
    deleteRoleHandle(row) {
      this.$confirm("是否删除当前角色", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await deleteRole(row.id);
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.getRoles();
        })
        .catch(() => {});
    },
    async saveRole() {
      if (this.dialogVisibleRoleType == "add") {
        await addRole(this.role);
      } else {
        await updateRole(this.role);
      }
      this.dialogVisibleRole = false;
      this.getRoles();
    },
  },
  components: { Pagination },
};
</script>

<style lang="scss" scoped>
</style>
