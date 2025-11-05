import type { ThemeConfig } from "vitepress-theme-open17/config";
import { genFeed } from "vitepress-theme-open17/genFeed";
import { defineConfigWithTheme } from "vitepress";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "huong-dan",
    resolvePath: "/huong-dan/",
    collapsed: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    rootGroupCollapsed: true
  },
];

export default defineConfigWithTheme<ThemeConfig>({
  title: "Mylenti",
  description: 'Tài liệu hướng dẫn Sử dụng và Giao diện cho Mylenti',
  markdown: {
    math: true
  },
  sitemap: {
    hostname: "https://mylenti-document.khoiwn04.com"
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "keywords", content: "vitepress, theme, blog, open17, mylenti, documents" }],
  ],
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions),
    outline: {
      label: 'Trên Trang Này'
    },
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
    notFound: {
      quote: 'Bạn đã đi nhầm đường, nhầm hướng, nhầm định vị, được rồi, hãy để tôi đưa bạn về trang chủ cho',
      linkText: 'Đưa tôi về',
      linkLabel: 'Đưa tôi về',
      title: 'TRANG KHÔNG TỒN TẠI',
    },
    darkModeSwitchTitle: 'Đổi màu tối',
    lightModeSwitchTitle: 'Đổi màu sáng',
    darkModeSwitchLabel: 'Giao diện',
    returnToTopLabel: 'Quay về đầu',
    docFooter: {
      next: 'Trang tiếp theo',
      prev: 'Trang trước'
    },
    skipToContentLabel: 'Bỏ qua nội dung',
    editLink: {
      pattern:
        "https://github.com/open17/vitepress-theme-open17/edit/master/docs/:path",
      text: "Chỉnh sửa Markdown"
    },
    logo: {
      dark: "/logo.png",
      light: "/logo_light.png",
    },
    lastUpdated: {
      text: "Cập nhật lúc",
        formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: "Trang chủ", link: "/" },
      { text: "Hướng dẫn", link: "/huong-dan/0-nguoi-dung/0-bat-dau" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/khoiw04/OBS_Mylenti",
      },
    ],
    feed: {
      baseUrl: 'https://blog.mylenti.khoiwn04.com', // Your deployed domain (required)
      copyright: 'Copyright © 2025-present Mylenti', // Copyright (optional)
      image: 'https://blog.mylenti.khoiwn04.com/logo.png', // RSS image (optional)
      favicon: 'https://blog.mylenti.khoiwn04.com/logo.ico' // RSS favicon (optional)
    },
  },
  buildEnd: genFeed,
  // vite: {
  //   plugins: [
  //     AutoSidebar({
  //       ignoreList: ['page', 'posts', 'public'],
  //       titleFromFile: true,
  //       beforeCreateSideBarItems: (data) => {
  //         const indexIndex = data.indexOf('index.md')
  //         if (indexIndex !== -1) {
  //           const indexValue = data[indexIndex]
  //           data.splice(indexIndex, 1)
  //           data.unshift(indexValue)
  //         }
  //         return data
  //       }
  //     })
  //   ]
  // }
});