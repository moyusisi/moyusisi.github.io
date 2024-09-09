import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "moyusisi",
    // url: "https://mister-hope.com",
  },

  favicon: "/favicon.ico",

  // 图标在这里搜 https://fontawesome.com/search?o=r&m=free
  iconAssets: "fontawesome-with-brands",

  logo: '/assets/image/logo.jpg',
  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  // sidebar,

  // 是否默认显示页脚。默认值: false
  displayFooter: true,
  // 页脚，可输入 HTMLString。
  footer: "",
  // 默认的版权信息，设置为 false 来默认禁用它。类型: string | false。默认值: "Copyright © <作者>"
  // copyright: "Copyright © <author.name>",
  
  // 博客功能，通过插件提供的。https://theme-hope.vuejs.press/zh/config/theme/feature.html
  blog: {
    // 博主姓名
    name: "moyusisi",
    // 口号、座右铭或介绍语。
    description: "逆水行舟，不进则退",
    // 博主的媒体链接配置。
    medias: {
      // QQ: "QQ",
    },
    // 是否在侧边栏展示博主信息。默认值: "mobile"
    sidebarDisplay: 'mobile',
    // 时间轴的顶部文字。默认值: "昨日不在"
    timeline: "昨日不在",
    // 每页的文章数量。默认 10
    articlePerPage: 10,
  },
  
  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {

    // 语法高亮
    shiki: {
      // 要使用的主题
      theme: "github-dark",
    },
    // prismjs: {
    //   // 要使用的主题
    //   theme: "one-dark",
    // },

    // 评论服务，参考：https://www.51cto.com/article/761976.html
    comment: {
      provider: "Giscus",
      repo: "moyusisi/comments",
      repoId: "R_kgDOMP8txw",
      category: "Announcements",
      categoryId: "DIC_kwDOMP8tx84CgetG",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 图片预览
    photoSwipe: false,
    // 阅读时间
    readingTime: false,

    // 启用博客功能
    blog: {
      // 自动生成的摘要的长度， 0表示不自动生成摘要。
      excerptLength: 0,
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
