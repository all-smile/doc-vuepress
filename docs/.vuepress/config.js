module.exports = {
  title: "Xiao的博客",
  description: "风之积也不厚，则其负大翼也无力",
  theme: "reco",
  // githup pages 基础路径 和仓库名相同
  base: "/doc-vuepress/",
  themeConfig: {
    author: "xiaojuntao",
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    type: "blog",
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
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
    /* sidebar: [
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
    ], */
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
