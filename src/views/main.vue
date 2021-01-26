<template>
  <div>
    <h3>Main</h3>

    <p>当前状态：{{ num }}</p>

    <div>
      <input type="text" v-model="numText" />
      <button @click="save">保存状态</button>
    </div>

    <router-link to="/test1">go test1</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      numText: ""
    };
  },
  computed: {
    ...mapGetters(["num"])
  },
  methods: {
    save() {
      this.$store.commit("app/SET_NUM", this.numText);
    }
  }
};
</script>
