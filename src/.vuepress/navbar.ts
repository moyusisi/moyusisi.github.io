import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  // NavbarGroup
  {
    text: '编程',
    prefix: '/program/',
    children: [
      { text: '后端技术', link: 'backend/' },
      { text: '前端技术', link: 'frontend/' },
      {
        text: "运维技术",
        prefix: "ops/",
        children: [
          { text: "Linux", link: "linux/" },
          { text: "MacOS", link: "macos/" },
          { text: "数据库", link: "db/" },
        ],
      }
    ]
  },
  // NavbarGroup
  {
    text: '算法',
    prefix: '/algorithm/',
    children: [
      { text: '动态规划', link: '动态规划/' },
      { text: '排序算法', link: '排序算法/' },
      { text: '力扣练习', link: 'leetcode/' }
    ]
  },
  // NavbarLink
  { text: '保险', link: '/insurance/' },
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
