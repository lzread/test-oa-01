module.exports = [
  {
    url: "/user/login",
    type: "post",
    response: config => {
      return {
        code: 200,
        message: "登录成功",
        data: {
          id: 1,
          token: "admin-token"
        }
      };
    }
  },
  {
    url: "/user/getInfo.*",
    type: "get",
    response: config => {
      return {
        code: 200,
        message: "查询成功",
        data: {
          id: "1",
          roles: ["admin"],
          introduction: "I am a super administrator",
          avatar: "",
          name: "Super Admin"
        }
      };
    }
  }
];
