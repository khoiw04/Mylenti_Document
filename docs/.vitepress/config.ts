import type { ThemeConfig } from "vitepress-theme-open17/config";
import { genFeed } from "vitepress-theme-open17/genFeed";
import { defineConfigWithTheme } from "vitepress";

import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "guide",
    resolvePath: "/guide/",
    collapsed: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    rootGroupCollapsed: true,
  },
];

export default defineConfigWithTheme<ThemeConfig>({
  title: "Mylenti",
  lang: "vi-VN",
  description: "Tài liệu hướng dẫn Sử dụng và Giao diện cho Mylenti",
  markdown: {
    math: true
  },
  sitemap: {
    hostname: "https://blog.mylenti.khoiwn04.com",
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "keywords", content: "vitepress, theme, blog, open17, mylenti, documents" }],
  ],
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions),
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html;
          return html;
        },
      },
    },
    editLink: {
      pattern:
        "https://github.com/open17/vitepress-theme-open17/edit/master/docs/:path",
      text: "帮我优化文章~"
    },
    feed: {
      baseUrl: "https://vitepress.open17.vip",
      copyright: "Copyright © 2023-present open17",
      image: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202405071726176.png",
    },
    blog: {
      tagPageLink: "/page/tags",
      bgImage: { dark: "/bg_dark.jpg" },
      direct: "lft",
      pageSize: 3, // align with new theme option, fallback still respects home.postsPerPage
      user: {
        name: "Open17",
        avatar: "/ava.jpg",
        describe: "A beautiful & simple blog theme of vitepress",
      },
    },
    home: {
      maxTagsDisplayed: 20,
      postsPerPage: 5,
    },
    logo: {
      dark: "/logo.png",
      light: "/logo_light.png",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/0-intro/" },
      {
        text: "Demo",
        items: [
          { text: "Blog", link: "/page/blog" },
          { text: "Tags", link: "/page/tags" },
          { text: "Archive", link: "/page/archive" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/open17/vitepress-theme-open17/",
      },
    ],
  },
  buildEnd: genFeed,
});
