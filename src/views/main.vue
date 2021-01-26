<template>
  <div>
    <h3>Main</h3>
    <pre>{{rows}}</pre>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { list, add, edit } from "@/api/news";
export default {
  data() {
    return {
      rows: []
    };
  },
  created(){
    this.getList()
  },
  methods: {
    async getList() {
      const data = await list();
      this.rows = data;
    },
    async add(){
      await add();
    },
    async edit(){
      await edit();
    }
  }
};
</script>
