---
title: Blog Theme v1.2 -> v1.3 Migration Guide
date: 2025-08-11
tags:
  - Version Update
  - Configuration
  - Guide
pin: true
---

<del>Currently still in `v1.3.0-beta.1` testing stage, so there might be slight differences from the final v1.3 release.</del>  

`v1.3.5` has now been released; it is recommended to upgrade to the latest stable version.

---

## Theme Configuration

The default `baseConfig` module has been removed and is no longer available (at least for now).

To fully leverage TypeScript type hints, it is recommended to rename your `config.mjs` to `config.ts`.

Now, all image types in configuration use the following:

```ts
declare type Open17Image = string | { light?: string; dark?: string };
```

The recommended configuration structure is as follows:

The theme configuration has some changes. Below is a sample updated configuration based on a demo:

Refer to the type declarations if you are unsure about any settings.

```