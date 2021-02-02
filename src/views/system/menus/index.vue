<template>
  <div>
    <el-button @click="addHandle">新建</el-button>
    <el-table
      :data="rows"
      row-key="id"
      default-expand-all
      :tree-props="{children:'children'}"
    >
      <el-table-column
        prop="title"
        label="标题"
      ></el-table-column>
      <el-table-column label="类别">
        <template slot-scope="scope">
          {{scope.row.type == 0 ? '菜单' : '权限按钮'}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="addChildrenHandle(scope.row)"
            type="text"
            v-if="scope.row.type == 0"
          >添加下级菜单</el-button>
          <el-button
            @click="addPermissionHandle(scope.row)"
            type="text"
            v-if="scope.row.type == 0"
          >添加权限菜单</el-button>
          <el-button
            @click="editHandle(scope.row)"
            type="text"
            v-if="scope.row.type == 0"
          >编辑菜单</el-button>
          <el-button
            @click="editPermissionHandle(scope.row)"
            type="text"
            v-if="scope.row.type == 1"
          >编辑按钮</el-button>
          <el-button
            @click="deleteHandle(scope.row)"
            type="text"
          >删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog
      width="600px"
      :visible.sync="dialogVisible"
      :title="dialogVisibleType == 'add' ? '新建菜单' : '编辑菜单'"
    >
      <el-form
        ref="menu"
        :model="items"
        label-width="100px"
        label-position="right"
      >
        <el-form-item label="菜单名称">
          <el-input
            v-model="items.title"
            placeholder="请输入"
          />
        </el-form-item>

        <el-form-item label="父级菜单">

          <treeselect
            v-model="items.parent_id"
            :default-expand-level="1"
            :searchable="false"
            :clearable="false"
            :options="treeSelectData"
            :normalizer="normalizer"
            :instance-id="items.id || 0"
            placeholder="请选择"
          />

        </el-form-item>

        <el-form-item label="路由名称">
          <el-input
            v-model="items.name"
            placeholder="请输入"
          />
        </el-form-item>

        <el-form-item label="组件路径">
          <el-input
            v-model="items.component"
            placeholder="请输入"
          />
        </el-form-item>

        <el-form-item label="菜单路径">
          <el-input
            v-model="items.path"
            placeholder="请输入"
          />
        </el-form-item>

      </el-form>

      <div slot="footer">
        <el-button
          type="danger"
          @click="reset('menu')"
        >取消</el-button>
        <el-button
          type="primary"
          @click="commitHandle()"
        >提交</el-button>
      </div>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogPermVisble"
      :title="dialogPermVisbleType == 'add' ? '新建权限按钮' : '编辑权限按钮' "
    >
      <el-form
        ref="perm"
        :model="items"
        label-width="100px"

      >
        <el-form-item label="权限功能">
          <el-radio-group v-model="permGroop">
            <el-radio-button label="ADD">新建权限</el-radio-button>
            <el-radio-button label="EDIT">编辑权限</el-radio-button>
            <el-radio-button label="DELETE">删除权限</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="items.title"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="reset('perm')">取消</el-button>
        <el-button @click="commitPermissionHandle">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { list, listSmall, add, edit, del } from "@/api/menu";
export default {
  name: "menus",
  data() {
    return {
      rows: [],
      items: {},
      parentItems: [],
      dialogVisible: false,
      dialogVisibleType: "",
      dialogPermVisble: false,
      dialogPermVisbleType: "",
      permGroop: "ADD",
    };
  },
  computed: {
    treeSelectData() {
      return [
        {
          id: 0,
          parent_id: -1,
          title: "根节点",
          children: this.parentItems,
        },
      ];
    },
  },
  created() {
    this.getList();
    this.getParentMap();
  },
  components: { Treeselect },
  methods: {
    normalizer(node, instanceId) {
      let disabled = false;
      if (node.id == instanceId && node.parent_id != -1) {
        disabled = true;
      }
      return {
        id: node.id,
        label: node.title,
        isDisabled: disabled,
        children: node.children,
      };
    },
    async getParentMap() {
      const { data } = await listSmall();
      this.parentItems = data;
    },
    async getList() {
      const { data } = await list();
      this.rows = data;
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
        await add(this.items);
      } else {
        await edit(this.items);
      }
      this.dialogVisible = false;
      this.getList();
    },

    addChildrenHandle(row) {
      this.dialogVisible = true;
      this.dialogVisibleType = "add";
      this.items = {};
      this.getParentMap();
      this.items.parent_id = row.id;
    },
    addPermissionHandle(row) {
      this.dialogPermVisble = true;
      this.dialogPermVisbleType = "add";

      this.items = {
        type: 1,
        parent_id: row.id,
      };
    },
    editPermissionHandle(row) {
      this.dialogPermVisble = true;
      this.dialogPermVisbleType = "edit";
      this.items = row;
    },
    async commitPermissionHandle() {
      this.items.name = this.permGroop;
      if(this.dialogPermVisbleType == 'add'){
        await add(this.items);
      }else{
        await edit(this.items)
      }
      this.dialogPermVisble = false;
      this.getList();
    },
    deleteHandle(row) {
      this.$confirm("是否确认删除", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(async () => {
          await del(row.id);
          this.getList();
        })
        .catch((err) => {});
    },
    reset(formName) {
      this.dialogVisible = false;
      this.dialogPermVisble = false;
      this.$refs[formName].resetFields();
    },
  },
};
</script>
