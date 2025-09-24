---
title: Usage Guide! Music Player Widget
date: 2024-10-17
tags:
  - Guide
  - Component
  - APlayer
img: https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg
---

This is a small app configured via the [custom components area](/guide/1-config/0-home.html#custom-components-area) in the blog theme, based on APlayer.

---

## What is APlayer?

:::tip Note

Since the example music links here are from NetEase Cloud Music, playback might fail due to network restrictions outside China.

:::

A simple and beautiful music player:

<div id='custom1' class="mx-5"></div>

<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  await import('aplayer/dist/APlayer.min.css');
  const APlayer = (await import('aplayer')).default;
  const ap = new APlayer({
    container: document.getElementById('custom1'),
    theme: 'var(--vp-c-brand-1)',
    audio: [
      {
        name: 'Lonely Patient',
        artist: 'Eason Chan',
        url: 'http://music.163.com/song/media/outer/url?id=64093.mp3',
        cover: 'http://p1.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg?param=640y300'
      },
      {
        title: 'Tear Bridge',
        author: 'AI Tao Zhe / Wu Bai',
        url: 'http://music.163.com/song/media/outer/url?id=2602320199.mp3',
        pic: 'https://p1.music.126.net/yhIdL8Ez0tCvTN1BCYNePQ==/109951169670480040.jpg?param=300x300'
      },
      {
        title: 'Fireworks',
        author: 'Daoko / Kenshi Yonezu',
        url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
        pic: 'http://p2.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg?param=300x300'
      },
    ],
  });
});
</script>

## Installing APlayer

```shell
yarn add APlayer
```

## Injecting the component

In the markdown file for your blog homepage, add a widget with a div that has an ID:

```md
---
layout: blog
widgets:
  - name: "Music Player"
    html: "<div id='custom1'></div>"
---
```

## Loading the player

In the same markdown file, add the following code:

```vue
<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  await import('aplayer/dist/APlayer.min.css');
  const APlayer = (await import('aplayer')).default;
  const ap = new APlayer({
    container: document.getElementById('custom1'),
    theme: 'var(--vp-c-brand-1)',
    audio: [
      {
        name: 'Lonely Patient',
        artist: 'Eason Chan',
        url: 'http://music.163.com/song/media/outer/url?id=64093.mp3',
        cover: 'http://p1.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg?param=640y300'
      },
      {
        title: 'Tear Bridge',
        author: 'AI Tao Zhe / Wu Bai',
        url: 'http://music.163.com/song/media/outer/url?id=2602320199.mp3',
        pic: 'https://p1.music.126.net/yhIdL8Ez0tCvTN1BCYNePQ==/109951169670480040.jpg?param=300x300'
      },
      {
        title: 'Fireworks',
        author: 'Daoko / Kenshi Yonezu',
        url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
        pic: 'http://p2.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg?param=300x300'
      },
    ],
  });
});
</script>
```

For more options, check out the [APlayer official site](https://aplayer.js.org/).

Here's some simple CSS styling:

```css
.aplayer {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  border-radius: 0.75rem !important;
}
```

Now you can display the music player widget on blog pages, tag pages, or any layout supporting widgets!

## Full example code

```md
---
layout: blog
widgets:
  - name: "Music Player"
    link: "/blog-docs/1-config/0-home.html#custom-components-area"
    html: "<div id='custom1' class='mx-4 rounded-xl'></div>"
---

<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  await import('aplayer/dist/APlayer.min.css');
  const APlayer = (await import('aplayer')).default;
  const ap = new APlayer({
    container: document.getElementById('custom1'),
    theme: 'var(--vp-c-brand-1)',
    audio: [
      {
        name: 'Lonely Patient',
        artist: 'Eason Chan',
        url: 'http://music.163.com/song/media/outer/url?id=64093.mp3',
        cover: 'http://p1.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg?param=640y300'
      },
      {
        title: 'Tear Bridge',
        author: 'AI Tao Zhe / Wu Bai',
        url: 'http://music.163.com/song/media/outer/url?id=2602320199.mp3',
        pic: 'https://p1.music.126.net/yhIdL8Ez0tCvTN1BCYNePQ==/109951169670480040.jpg?param=300x300'
      },
      {
        title: 'Fireworks',
        author: 'Daoko / Kenshi Yonezu',
        url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
        pic: 'http://p2.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg?param=300x300'
      },
    ],
  });
});
</script>
```