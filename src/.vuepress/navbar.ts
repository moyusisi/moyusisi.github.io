import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/project",
  // NavbarGroup
  {
    text: '编程',
    icon: 'code',
    prefix: '/program/',
    children: [
      { text: '代码笔记', link: 'code/' },
      {
        text: "工具运维",
        prefix: "ops/",
        children: [
          { text: "Linux", link: "linux/" },
          { text: "MacOS", link: "macos/" },
          { text: "DB", link: "db/" },
          { text: "工具", link: "tool/" },
        ],
      }
    ]
  },
  // NavbarGroup
  {
    text: '算法',
    icon: "lightbulb",
    prefix: '/algorithm/',
    children: [
      { text: '动态规划', link: '动态规划/' },
      { text: '力扣练习', link: 'leetcode/' }
    ]
  },
  // NavbarLink
  { text: '保险理财', icon: "lightbulb", link: '/insurance/' },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
