# Background Image Configuration

You can configure background images for your pages. Both **global** and **per-page** configurations are supported.

Background images support **light and dark themes**, and you can set different images for each.

## Global Background Image Configuration

```js
themeConfig: {
  blog: {
    bgImage: "/bg.jpg", // Single background image
    // Or specify separate images for light and dark themes
    bgImage: { 
      light: "/bg.jpg",       // Background for light theme
      dark: "/bg_dark.jpg"    // Background for dark theme
    }
  }
}
```

## Per-Page Background Image Configuration

Set this in the page's frontmatter. It takes priority over the global setting:

```md
---
bgImage: "/custom-bg.jpg"           # Single background image
# Or specify images for light and dark themes
bgImage:
  light: "/custom-bg-light.jpg"     # Background for light theme
  dark: "/custom-bg-dark.jpg"       # Background for dark theme
---
```

## Usage Examples

Refer to the example pages in this theme:

* Blog page: `/page/blog` – uses different backgrounds for light and dark modes
* Tags page: `/page/tags` – uses the same background configuration
* Archive page: `/page/archive` – unified background style