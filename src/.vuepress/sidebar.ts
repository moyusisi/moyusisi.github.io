import { sidebar } from "vuepress-theme-hope";

export default sidebar({

  "/program/": [
    { text: "Java", link: "java/", icon: "java" },
    { text: "Spring", link: "spring/", icon: "leaf" },
    { text: "DB", link: "db/", icon: "database" },
    { text: "Web", link: "web/", icon: "globe" },
    { text: "Linux", link: "linux/", icon: "linux" },
    { text: "MacOS", link: "macos/", icon: "apple" },
  ],
  "/algorithm/": "structure",
  "/insurance": "structure",

  // fallback
  "/": [
    "",
    "portfolio",
  ],
});
