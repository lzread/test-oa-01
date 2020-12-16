<template>

  <div>

    <input
      type="text"
      placeholder="用户名"
      v-model="loginForm.username"
    >
    <input
      type="password"
      placeholder="密码"
      v-model="loginForm.password"
    >
    <button @click="login">登录</button>

  </div>

</template>



<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("user/login", this.loginForm).then(() => {
        this.$router.push({
          path: "/",
        });
      });
    },
  },
};
</script>


<style lang="scss" scoped>
</style>