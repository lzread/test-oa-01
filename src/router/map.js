const routerComponentsMap = {
  system: () => import("@/components/Layout"),
  users: () => import("@/views/system/users/index"),
  menus: () => import("@/views/system/menus/index"),
  roles: () => import("@/views/system/roles/index"),
  work: () => import("@/components/Layout")
};

export default routerComponentsMap;
