<template>

  <div>

    <div class="loginForm">
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

      <el-button
        @click="login"
        type="danger"
      >登录</el-button>
    </div>

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
.loginForm{width: 400px; margin: 100px auto; display: flex; flex-direction: column;
  input[type]{height: 50px; padding: 0 20px; box-sizing: border-box; margin: 5px 0; border:1px solid #ddd; border-radius: 5px; background-color: #fff;
    &:focus{outline: 0;}
  }
  button{height: 50px; border:0; background-color: #f60; color: #fff; border-radius: 5px; margin-top: 50px;}
}
</style>