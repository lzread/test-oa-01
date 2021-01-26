const Mock = require("mockjs");

const data = Mock.mock({
  "items|30": [
    {
      id: "@id",
      title: "@sentence(10, 20)",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)"
    }
  ]
});

module.exports = [
  {
    url: "/news/list",
    type: "get",
    response: _ => {
      const items = data.items;
      return {
        code: 200,
        data: items
      };
    }
  },
  {
    url: "/news/add",
    type: "post",
    response: _ => {
      return {
        code: 200,
        data: "success"
      };
    }
  },

  {
    url: "/news/edit",
    type: "post",
    response: _ => {
      return {
        code: 200,
        data: "success"
      };
    }
  }
];
