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
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
    {
      text: "编程",
      prefix: "program/",
      link: "program/",
      children: [
        { text: '代码笔记', link: 'code/' },
        {
          text: "工具运维",
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
