<template>
  <div>
    <h3>test1</h3>
    <p>{{ num }}</p>
    <router-link to="/">go main</router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["num"])
  }
};
</script>
