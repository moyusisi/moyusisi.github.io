import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
    {
      text: "编程",
      prefix: "program/",
      link: "program/",
      children: [
        { text: '后端技术', link: 'backend/' },
        { text: '前端技术', link: 'frontend/' },
        {
          text: "运维技术",
          prefix: "ops/",
          children: "structure",
        }
      ]
    },
    {
      text: '算法',
      prefix: 'algorithm/',
      link: "algorithm/",
      children: "structure",
    },
    {
      text: "保险",
      prefix: "insurance/",
      link: "insurance/",
      children: "structure",
    },
  ],
});
