# Pulsate Blog

[![CI](https://github.com/pulsate-dev/blog/actions/workflows/ci.yaml/badge.svg)](https://github.com/pulsate-dev/blog/actions/workflows/ci.yaml)
[![Deploy](https://github.com/pulsate-dev/blog/actions/workflows/deploy.yaml/badge.svg)](https://github.com/pulsate-dev/blog/actions/workflows/deploy.yaml)

Pulsate の開発情報などを発信するブログ.
[`blog.pulsate.dev`](https://blog.pulsate.dev) で公開されています.
コンテンツの投稿は Pulsate プロジェクトチームのみが行うことができます.

---

1. `src/posts` に新しい Markdown ファイルを作成する.
2. ファイルの先頭に以下のようなメタデータを記述する.
   - `title`: 記事のタイトルを指定する.
   - `date`: 記事の公開日を指定する.
   - `author`: 記事の著者を指定する.
   - `tags`: 記事のタグを指定する.
     - リリースノートの場合は `release` タグを指定する.
   - `comments.src`: 記事のコメントソースを指定する. Pulsate をはじめとする
     ActivityPub インスタンスに対応. 必ずしも指定する必要はない.
   - `draft`: 下書きの場合は `true` を指定する.

```markdown
---
title: The example post
date: '2023-09-10'
author: Sho Sakuma
tags:
  - ActivityPub
comments:
  src: 'https://mstdn.mand.io/@m1sk9/0000000'
draft: true
---
```
