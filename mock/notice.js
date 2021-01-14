const Mock = require("mockjs");

const data = Mock.mock({
  "items|300": [
    {
      id: "@id",
      title: "@title(10, 20)",
      content: "@sentence(10, 20)",
      status: 0,
      release_time: "@date",
      image: "@image(200x200)"
    }
  ]
});

module.exports = [
  {
    url: "/notice/list",
    type: "get",
    response: config => {
      const { page = 1, limit = 20 } = config.query;

      const items = data.items;

      const pageList = items.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 200,
        data: [...pageList],
        total: items.length
      };
    }
  }
];
