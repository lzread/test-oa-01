module.exports = [
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = config.body;

            if (username == "sys01") {
                return {
                    code: 200,
                    message: "登录成功",
                    data: {
                        id: "1",
                        tonken: "sys01-tonken"
                    }
                }
            } else if (username == "sys02") {
                return {
                    code: 200,
                    message: "登录成功",
                    data: {
                        id: "2",
                        tonken: "sys02-tonken"
                    }
                }
            } else if (username == "sys03") {
                return {
                    code: 200,
                    message: "登录成功",
                    data: {
                        id: "3",
                        tonken: "sys03-tonken"
                    }
                }
            } else if (username == "sys04") {
                return {
                    code: 200,
                    message: "登录成功",
                    data: {
                        id: "4",
                        tonken: "sys04-tonken"
                    }
                }
            } else {
                return {
                    code: 200,
                    message: "登录失败"
                }
            }
        }
    },
    {
        url: "/user/getInfo.*",
        type: "get",
        response: config => {
            const { id } = config.query;
            if (id == "1") {
                return {
                    code: 200,
                    message: "查询成功",
                    data: {
                        id: "1",
                        roles: ["admin"],
                        realname: "我是 sys01 管理员， 我的角色是 admin",
                    }
                }
            } else if (id == "2") {
                return {
                    code: 200,
                    message: "查询成功",
                    data: {
                        id: "2",
                        roles: ["editor"],
                        realname: "我是 sys02 管理员， 我的角色是 editor",
                    }
                }
            } else if (id == "3") {
                return {
                    code: 200,
                    message: "查询成功",
                    data: {
                        id: "3",
                        roles: [""],
                        realname: "我是 sys03 管理员， 我的角色是 null",
                    }
                }
            } else if (id == "4") {
                return {
                    code: 200,
                    message: "查询成功",
                    data: {
                        id: "4",
                        roles: ["admin", "editor"],
                        realname: "我是 sys04 管理员， 我的角色是 admin and editor",
                    }
                }
            }
        }
    }
];
