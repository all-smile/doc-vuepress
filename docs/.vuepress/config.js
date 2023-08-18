const nodeEnv = process.env.NODE_ENV;
console.log("process.env.NODE_ENV===>", nodeEnv); // development production
module.exports = {
  title: "Xiao的博客",
  description: "风之积也不厚，则其负大翼也无力",
  // theme: "reco", // vuepress-theme-reco
  // githup pages 基础路径 和仓库名相同
  base: nodeEnv == "development" ? "" : "/doc-vuepress/",
  themeConfig: {
    author: "xiaojuntao",
    logo: "/assets/img/avatar.jpg",
    authorAvatar: "/assets/img/avatar.jpg",
    // type: "blog",
    // navbar: false, // 禁用所有页面的导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "知识库",
        items: [
          {
            text: "🥝偏前端开发实用技能",
            link: "/fe-skills/",
          },
          {
            text: "🎈偏前端架构运维小火慢炖",
            link: "/fe-framework/",
          },
        ],
      },
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
    sidebar: {
      "/fe-skills/": [
        {
          title: "闭包",
          children: [
            // ['','文章推荐'],
            ["test", "test"],
          ],
        },
        {
          title: "作用域",
          children: [
            ["test1", "测试test1"],
            ["test2", "test2"],
          ],
        },
        "only",
      ],
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
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //   },
  // },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "assets",
      },
    },
  },
};
