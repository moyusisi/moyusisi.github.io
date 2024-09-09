import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/program/": "structure",
  "/algorithm/": "structure",
  "/insurance": "structure",

  // fallback
  "/": [
    "",
    "portfolio",
    "program/",
  ],
});
