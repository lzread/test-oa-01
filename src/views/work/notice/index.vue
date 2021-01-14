<template>
  <div>
    <el-button type="primary" @click="addHandle">新建</el-button>

    <el-table :data="rows">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="release_time" label="发布时间"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 0" size="mini">正常</el-tag>
          <el-tag v-else size="mini">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="editHandle(scope.row)" type="text" size="mini"
            >编辑</el-button
          >
          <el-button
            @click="delHandle(scope.$index, scope.row)"
            type="text"
            size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog
      :title="dialogVisibleType == 'add' ? '新建' : '编辑'"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="items" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="items.title"></el-input>
        </el-form-item>

        <el-form-item>
          <el-upload
            class="avatar-uploader"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="日期">
          <el-date-picker
            v-model="items.release_time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="内容">
          <el-input type="textarea" v-model="items.content"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitHandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { list, add, edit, del } from "@/api/notice";
import Pagination from "@/components/Pagination";
export default {
  name: "Notice",
  data() {
    return {
      rows: [],
      items: {},
      dialogVisible: false,
      dialogVisibleType: "",
      uploadPath: "http://api.lzread.com:3111/api/uploadFile",
      imageUrl: "",
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      }
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
    addHandle() {
      this.dialogVisible = true;
      this.dialogVisibleType = "add";
      this.imageUrl = "";
      this.items = {
        status: 0,
        image: ""
      };
    },
    editHandle(row) {
      this.dialogVisible = true;
      this.dialogVisibleType = "edit";
      this.items = row;
      this.imageUrl = row.image;
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
    delHandle(index, row) {
      this.$confirm("是否删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(async () => {
        this.rows.splice(index, 1);
        await del(row.id);
        this.$message({
          type: "success",
          message: "删除成功"
        });
      });
    },
    handleAvatarSuccess(res, file) {
      if (res.code == "200") {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.items.image = res.url;
      } else {
        this.$message.error("上传失败了！");
      }
    },
    beforeAvatarUpload() {
      //
    }
  },
  components: { Pagination }
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
