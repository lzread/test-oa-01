import request from "@/utils/request";

export function list() {
  return request({
    url: "/news/list",
    method: "get"
  });
}

export function add(data) {
  return request({
    url: '/news/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/news/edit',
    method: 'post',
    data
  })
}
