module.exports = {
  title: "Xiao的博客",
  description: "desc",
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "xiao 的博客",
        items: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/852876755212814/columns",
          },
          { text: "Github", link: "https://github.com/all-smile" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/blogs/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/blogs/1" },
          { title: "第二篇", path: "/blogs/2" },
        ],
      },
    ],
  },
};
