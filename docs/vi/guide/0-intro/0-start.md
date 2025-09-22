# Quick Start

It is recommended to use the template provided by the theme, or you can start manually.

## :star: One-Click Start (Recommended) <Badge type="warning" text="New" />

```bash
# Replace my-blog with your project name
npm create open17-blog my-blog
```

## :star: GitHub Template

Start with GitHub Template in one click: [Click here](https://github.com/open17/vitepress-theme-open17/generate)

## :hammer_and_wrench: Manual Start

Before this, you should initialize a VitePress project and then install the theme. If you haven't initialized it yet, see here for [initializing a VitePress project](https://vitepress.dev/zh/guide/getting-started).

Once the initialization is complete, install the theme:

Enable the theme in the VitePress theme entry:

```js
// .vitepress/theme/index.js
import Theme from 'vitepress-theme-open17'
export default Theme
```

Write the configuration in a type-safe way:

```ts
// .vitepress/config.ts
import type { ThemeConfig } from 'vitepress-theme-open17/config'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Your theme configuration
  }
})
```

You can learn more about related information in the configuration documentation.

Now the theme is initialized! 🎊