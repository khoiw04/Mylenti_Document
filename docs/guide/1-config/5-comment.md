# Comment Configuration <Badge type="warning" text="beta" />

## Description

Currently, the comment feature is based on [giscus](https://giscus.app/).

You can find more configuration details on the giscus website.

## Global Comment Configuration

Setting `use` to `true` will enable comments on docs-type pages.

```ts
// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress'
export default defineConfigWithTheme({
  themeConfig: {
    comment: {
      use: true,
      repo: "owner/repo",
      repoId: "",          // The repoId of the repository
      category: "Announcements",
      categoryId: "",      // The categoryId of the discussion category
      mapping: "pathname", // Options: url | title | og:title | specific | number | pathname
      strict: "0",         // '0' | '1'
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top", // 'top' | 'bottom'
      lang: "zh-CN"
    }
  }
})
```

## Per-Page Comment Setting

You can override whether comments are enabled in a page’s frontmatter, which takes priority over the global config:

```md
---
comment: true # or false
---
```

### Tips:

* When `comment.use = true`, the comment component will be rendered at the bottom of documentation pages (not blog list pages).
* The giscus language can be set globally via `comment.lang`, for example `zh-CN` or `en`.