# Theme Color Configuration

You can configure default style variable values by importing a custom `css` file:

```js
// .vitepress/theme/index.js
import Theme from 'vitepress-theme-open17'
import './style.css'
export default Theme
```

All available variable names can be found [here](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)

Currently, this theme relies on core VitePress color variables such as `--vp-c-bg`, `--vp-c-text`, etc.

In the future, these may be further decoupled to reduce dependency on the default theme.

## Example: Custom Theme Colors

Below are the default theme colors used in this theme:

```css
/* .vitepress/theme/style.css */
:root {
  --vp-c-brand-1: #4b70df;
  --vp-c-brand-2: #2650dac8;
  --vp-c-brand-3: #3c83ba;
}

.dark:root {
  --vp-c-brand-1: #4b95df;
  --vp-c-brand-2: #198ed2;
  --vp-c-brand-3: #3c83ba;
}
```

## Blog Component Color Variables

The theme also provides custom color variables for specific blog components, such as tag colors, timeline highlights, etc.
See the [Custom Theme Color Guide](/posts/2024-11-10-color.html) for more details.

```