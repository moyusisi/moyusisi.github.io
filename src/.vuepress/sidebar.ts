import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/program/java": "structure",
  "/program/spring": "structure",
  "/program/db": "structure",
  "/program/web": "structure",
  "/program/linux": "structure",
  "/program/macos": "structure",
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
