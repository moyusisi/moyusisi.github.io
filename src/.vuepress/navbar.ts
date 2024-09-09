import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/project",
  // NavbarGroup
  {
    text: '编程',
    icon: 'laptop-code',
    prefix: '/program/',
    children: [
      { text: '代码笔记', link: 'code/' },
      { text: "Linux", link: "linux/" },
      { text: "MacOS", link: "macos/" },
      { text: "DB", link: "db/" },
      { text: "Web", link: "web/" },
    ]
  },
  // NavbarGroup
  {
    text: '算法',
    icon: "lightbulb",
    prefix: '/algorithm/',
    children: [
      { text: '动态规划', link: 'dp/' },
      { text: '力扣练习', link: 'leetcode/' }
    ]
  },
  // NavbarLink
  { text: '保险理财', icon: "chart-line", link: '/insurance/' },
]);
