# RSS Configuration

The theme supports **built-in RSS functionality** out of the box. You just need to add the configuration in your config file.

## RSS Setup

```ts
// .vitepress/config.ts
import { genFeed } from 'vitepress-theme-open17/genFeed'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  // ...
  themeConfig: {
    // ...
    feed: {
      baseUrl: 'https://www.open17.vip', // Your deployed domain (required)
      copyright: 'Copyright © 2023-present open17', // Copyright (optional)
      image: 'https://www.open17.vip/logo.png', // RSS image (optional)
      favicon: 'https://www.open17.vip/logo.ico' // RSS favicon (optional)
    },
  },
  buildEnd: genFeed, // Generate RSS feed after build
})
````

Once configured, your RSS feed will be available at:

```
{baseUrl}/feed.rss
```

For example: `https://www.open17.vip/feed.rss`