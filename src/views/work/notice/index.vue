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
                    <el-button @click="editHandle(scope.row)" type="text" size="mini">编辑</el-button>
                    <el-button @click="delHandle(scope.$index, scope.row)" type="text" size="mini">删除</el-button>
                </template>
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
            dialogVisible: false,
            dialogVisibleType: "",
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
        addHandle() {
         
        }
    },
    components: {  },
};
</script>


<style lang="scss" scoped>
</style>