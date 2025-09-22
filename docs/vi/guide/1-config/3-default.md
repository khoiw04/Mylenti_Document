# Default Configuration

The theme no longer provides a directly extendable `baseConfig`.

It is recommended to write your configuration using a **type-safe** approach:

```ts
// .vitepress/config.ts
import type { ThemeConfig } from 'vitepress-theme-open17/config'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme<ThemeConfig>({
  // Basic site info
  title: 'Vitepress Open17',
  description: 'A VitePress Site',

  // Theme configuration
  themeConfig: {
    search: { provider: 'local' },
    footer: {
      message:
        'Released under the <a href="https://github.com/open17/vitepress-theme-open17/blob/template/LICENSE">Apache 2.0 License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/open17">open17</a>',
    },

    // Blog configuration
    blog: {
      // Sidebar direction: left or right
      direct: 'rgt', // 'lft' | 'rgt'

      // Hide sidebar (pure mode)
      pureMode: false,

      // User info displayed on the homepage sidebar
      user: {
        name: 'Open17',
        avatar: '/ava.jpg',
        describe: 'A beautiful & simple blog theme of vitepress',
      },

      // Number of posts per page (takes priority over home.postsPerPage)
      pageSize: 5,

      // Tag page link (used for "More Tags" navigation)
      tagPageLink: '/page/tags',
    },

    // Homepage configuration
    home: {
      // Max number of tags displayed in the homepage tag bar
      maxTagsDisplayed: 20,

      // Number of posts per page (used when blog.pageSize is not set)
      postsPerPage: 5,
    },

    // For comments, RSS, etc., refer to the corresponding sections
  },
})
```

### Notes:

* **User info** has been moved to `blog.user`, including `name`, `avatar`, and `describe`.
* **Tag display count** uses `home.maxTagsDisplayed`; the "More" link uses `blog.tagPageLink`.
* **Pagination** prioritizes `blog.pageSize`; if not set, it falls back to `home.postsPerPage`.
* **Category functionality**: By default, the first-level folder inside `/posts` is used as the category; posts in the root of `/posts` are categorized as "Others".
* **Multi-language support**: Pagination, tags/categories, and UI texts support both Chinese and English, following the site language setting.
* **Reserved fields**: `homePageLink` and `archivePageLink` are defined in the type but not used in the current version.