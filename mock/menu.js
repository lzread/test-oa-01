module.exports = [
  {
    url: "/menu/getMenus",
    type: "get",
    response: config => {
      return {
        code: 200,
        message: "查询成功",
        data: [
          {
            id: 1,
            name: "system",
            title: "系统管理",
            path: "/system",
            component: "/views/components/Layout",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "0",
            type: 0,
            sort: 0,
            roles: "editor"
          },
          {
            id: 2,
            name: "menus",
            title: "菜单管理",
            path: "/system/menus",
            component: "/views/system/menus",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "1",
            type: 0,
            sort: 0,
            roles: "editor"
          },
          {
            id: 3,
            name: "roles",
            title: "角色管理",
            path: "/system/roles",
            component: "/views/system/roles",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "1",
            type: 0,
            sort: 0,
            roles: "editor"
          },
          {
            id: 4,
            name: "ADD",
            title: "新建角色",
            path: null,
            component: null,
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "3",
            type: 1,
            sort: 0,
            roles: "editor"
          },
          {
            id: 5,
            name: "EDIT",
            title: "编辑角色",
            path: null,
            component: null,
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "3",
            type: 1,
            sort: 0,
            roles: null
          },
          {
            id: 6,
            name: "DELETE",
            title: "删除角色",
            path: null,
            component: null,
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "3",
            type: 1,
            sort: 0,
            roles: null
          },
          {
            id: 7,
            name: "ADD",
            title: "新建菜单",
            path: null,
            component: null,
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "2",
            type: 1,
            sort: 0,
            roles: "editor"
          },
          {
            id: 8,
            name: "EDIT",
            title: "编辑菜单",
            path: null,
            component: null,
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "2",
            type: 1,
            sort: 0,
            roles: null
          },
          {
            id: 9,
            name: "users",
            title: "用户管理",
            path: "/system/users",
            component: "/views/system/users/index",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "1",
            type: 0,
            sort: 0,
            roles: ""
          },
          {
            id: 10,
            name: "department",
            title: "部门管理",
            path: "/system/department",
            component: "/views/system/department/index",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "1",
            type: 0,
            sort: 0,
            roles: "editor"
          },
          {
            id: 11,
            name: "logs",
            title: "系统日志",
            path: "/system/logs",
            component: "/views/system/logs/index",
            icon: null,
            redirect: null,
            hidden: "false",
            parent_id: "1",
            type: 0,
            sort: 0,
            roles: "editor"
          }
        ]
      };
    }
  }
];
