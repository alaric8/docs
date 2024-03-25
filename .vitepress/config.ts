import { defineConfig } from "vitepress";
import fs from "node:fs";
import glob from "fast-glob";
import path from "node:path";
import { nav, siderbar } from "./utils";

export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  assetsDir: "static",
  base: "/docs/",
  cleanUrls: true, // 清除 .html 后缀
  metaChunk: true,
  mpa: true,
  lastUpdated: true,
  title: "alaric 搬砖笔记",
  description: "alaric 搬砖笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [...nav(["**/*", "!public"])],
    sidebar: {
      "/vscode/使用教程/": [...siderbar(["vscode*/使用教程/**/*.md", "!public", "!index.md"])],
      "/vscode/扩展开发/": [...siderbar(["vscode*/扩展开发/**/*.md", "!public", "!index.md"])],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/AlaricWeb" }],
  },
});
