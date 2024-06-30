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
      { text: '后端技术', link: 'backend/' },
      { text: '前端技术', link: 'frontend/' },
      {
        text: "运维技术",
        prefix: "ops/",
        children: [
          { text: "Linux", link: "linux/" },
          { text: "MacOS", link: "macos/" },
          { text: "DB", link: "db/" },
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
