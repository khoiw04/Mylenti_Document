# Homepage Configuration

## Sidebar Layout Direction

```js
themeConfig: {
  blog: {
    direct: 'lft' // or 'rgt' – Sidebar on the left or right
  }
}
````

## User Info Panel

```js
themeConfig: {
  blog: {
    user: {
      name: 'My Awesome Blog',       // Display name
      describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Signature/description
      avatar: '/path/to/avatar.jpg'  // Avatar image path
    }
  }
}
```

## Hide Sidebar (Pure Mode)

If you want to hide the sidebar and focus solely on article content, you can enable *pure mode*:

```js
themeConfig: {
  blog: {
    pureMode: true // Hide sidebar (default: false)
  }
}
```

## Pagination for Blog Posts

Priority is given to `blog.pageSize`. If not set, it falls back to `home.postsPerPage`.

```ts
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  themeConfig: {
    blog: {
      pageSize: 5 // Number of posts per page
    },
    home: {
      postsPerPage: 5 // Fallback if blog.pageSize is not set
    }
  }
})
```

## Tag Panel on Homepage

* The number of tags shown on the homepage is controlled by `home.maxTagsDisplayed`.
* To display a “more” icon in the sidebar, you need to set `blog.tagPageLink`.

```js
themeConfig: {
  home: {
    maxTagsDisplayed: 5 // Maximum number of tags displayed on homepage
  },
  blog: {
    tagPageLink: '/page/tags' // Optional: link to full tag page
  }
}
```

## Category Panel

* Categories are automatically extracted based on the directory structure under `/posts`:
  e.g., files under `/posts/<folder>/xxx.md` will belong to that folder's category.
  Posts directly inside `/posts` are classified as “Others”.
* The selected category will sync with the URL using `?category=xxx`, and is compatible with tags and pagination.
* Switching tags or categories will automatically reset to page 1.

## Custom Widget Panel

Supports both **global widgets** and **per-page widgets** (configured via frontmatter). They will be rendered together.

* Global Configuration:

```ts
// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  themeConfig: {
    blog: {
      widgets: [
        { name: 'Ad Slot', link: 'https://example.com', html: '<div>AD</div>' },
      ]
    }
  }
})
```

* Per-Page Configuration:

```md
---
widgets:
  - name: "🍰 Example"
    link: "/guide/1-config/0-home.html#custom-widget-panel"
    html: "<div id='custom1'></div>"
---
```

In the page script, you can render Vue components into these custom containers. For details, see the examples in the theme’s repository.