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
    rootGroupCollapsed: true
  },
  {
    documentRootPath: "docs",
    scanStartPath: "guide",
    resolvePath: "/vi/guide/",
    collapsed: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    rootGroupCollapsed: true
  },
];

export default defineConfigWithTheme<ThemeConfig>({
  title: "Mylenti",
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
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      link: '/vi/'
    }
  },
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
      text: "Edit Markdown"
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
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/khoiw04/OBS_Mylenti",
      },
    ],
  },
  buildEnd: genFeed,
});