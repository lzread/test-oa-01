import request from "@/utils/request";
export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}
export function getInfo(id) {
  return request({
    url: "/user/getInfo",
    method: "get",
    params: { id }
  });
}