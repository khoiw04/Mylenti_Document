# Feature Enhancements

Here are some commonly used blog feature enhancement configurations/usage methods. Some of these are already integrated into this theme, while others are not.

Reasons for not including some features may include:

- The related feature configuration is already simple and convenient, no need to embed into the theme.
- The feature might have certain bugs.
- The feature is too heavy and introduces additional burden.
- The default theme already implements it.

## Basic Configuration

It is recommended to use type-safe configuration:

```ts
// .vitepress/config.ts
import type { ThemeConfig } from 'vitepress-theme-open17/config'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // ...your config
  }
})
```

See [Default Configuration](/guide/1-config/3-default.html) for details.

## Background Image Settings

Set `bgImage` globally or in page frontmatter:

```md
---
bgImage: '/bg.jpg'
# or
bgImage:
  light: '/bg.jpg'
  dark: '/bg_dark.jpg'
---
```

See [Background Image Configuration](/guide/1-config/1-ornateStyle.html) for details.

## Markdown Inclusion

Often, we want the README and a blog post to stay perfectly synchronized, without manually updating both. You can directly include the corresponding markdown file, which will render as a page.

Reference usage: [here](https://vitepress.dev/guide/markdown#markdown-file-inclusion)

For example, the blog's update announcement is included from the CHANGELOG:

```md
---
tags:
  - theme
  - update
title: Update Announcement
pin: true
---

Here is the blog update announcement.

---

:::info
Content synced from [CHANGELOG](https://github.com/open17/vitepress-theme-open17/blob/template/CHANGELOG.md)

Last sync time: {{ Date() }}

:::

<!--@include: @/../CHANGELOG.md -->
```

## RSS Configuration

This theme supports RSS. Configure as below, and a file will be generated at `baseUrl + feed.rss` on build.

See [RSS](/guide/1-config/4-rss) for details.

## Sitemap

VitePress supports sitemap natively, just configure the site domain in `config.ts`, for example:

```ts
import { defineConfigWithTheme } from 'vitepress'
export default defineConfigWithTheme({
  sitemap: {
    hostname: 'https://www.open17.vip'
  }
})
```

## Math Formula Support

VitePress supports mathjax natively. Just enable it in `config.ts` like this:

```ts
import { defineConfigWithTheme } from 'vitepress'
export default defineConfigWithTheme({
  markdown: {
    math: true
  }
})
```

## Custom Containers

See the official VitePress documentation for details.

## Import Code Snippets

See [import-code-snippets](https://vitepress.dev/guide/markdown#import-code-snippets) for details.

## Pinning Blog Posts

Set `pin: true` in the frontmatter of the corresponding markdown file to pin the blog post.

## Custom Home Page Components

See [here](/guide/1-config/0-home.html#custom-widgets) for details.

## Auto Sidebar

There is a ready-made vite plugin: [vite-plugin-vitepress-auto-sidebar](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar)

Personal config example:

```js
vite: {
  plugins: [
    AutoSidebar({
      ignoreList: ['page', 'posts', 'public'],
      titleFromFile: true,
      beforeCreateSideBarItems: (data) => {
        const indexIndex = data.indexOf('index.md')
        if (indexIndex !== -1) {
          const indexValue = data[indexIndex]
          data.splice(indexIndex, 1)
          data.unshift(indexValue)
        }
        return data
      }
    })
  ]
}
```

## Slideshows

You can refer to this blog post:

* [Using Slideshows in VitePress](https://www.open17.vip/posts/project/2024-10-15-vitepress-reveal.html)
