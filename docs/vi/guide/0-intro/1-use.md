# Blog Usage

After initializing the environment, we can start writing our blog posts!

## :bookmark_tabs: Creating Blog Posts

Create a folder named `posts` in the [site directory](https://vitepress.dev/zh/guide/getting-started#file-structure) of your VitePress project.

All markdown files created inside the `posts` folder will be treated as blog posts.

For example, your folder structure might look like this:

.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ posts
│  │    ├─ my-blog-0.md
│  │    └─ my-blog-1.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json


Here, `my-blog-0.md` and `my-blog-1.md` will automatically be rendered as blog posts by the theme.

## :book: Configuring Blog Posts

Some configurations related to blog posts:

- `title`: The title of the post, which will automatically be rendered within the post.
- `date`: The creation date of the post, default is 1900-01-01.
- `tags`: The tags for the post, multiple tags are supported.
- `pin`: A boolean value to determine if the post should be pinned at the top, default is `false`.
- `desc`: A brief description, which will display if no excerpt is provided.
- `cover`: A cover image for the post card, displayed at the top of the post list (optional).

The excerpt is the content before the first `---` separator in the post.

Tip: The blog page supports filtering by "tags" and "categories," and the URL will sync:
- Tag query uses `tag`, e.g., `?tag=xxx`
- Category query uses `category`, e.g., `?category=xxx`
- Pagination query uses `page`, e.g., `?page=2`
Switching tags or categories will automatically reset to page 1.

Here’s an example of a post with complete configuration:

```md
---
title: My First Blog Post
date: 2024-03-23
tags:
    - hello world
    - Tag 1

pin: true
desc: xxxx
img: xxx
---

This is the excerpt of the post

---

I am a piece of filler text

## Title A

AAAAAAAAAAAAAAAAAAAAAA

## Title B

BBBBBBBBBBBBBBB
````

## :house: Setting Up the Blog Homepage

The blog homepage will automatically display all blog posts and sort them by the creation date.

It will also show your avatar, nickname, signature, and other content. Starting from <Badge type="tip" text="Version 1.1.0" /> and beyond, you can also add related homepage widgets.

For example: [Blog Homepage Example](/page/blog)

For any VitePress markdown page, you can turn it into the blog homepage by using the `layout` configuration:

```md
---
layout: blog
---
```

This means you can choose any page, or even multiple pages, as the homepage. However, it is recommended to use `index.md` as the blog homepage to follow the common blogging site practices.

If you're unclear about the correspondence between file paths and page routes, refer to VitePress’s [related documentation](https://vitepress.dev/zh/guide/routing#file-based-routing).

Now, you should be able to see the created posts on the corresponding blog homepage.

## :bookmark: Creating Tag and Archive Pages

Similar to the blog homepage.