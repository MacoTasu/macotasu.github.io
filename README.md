# MacoTasu Portfolio & maco.life

GitHub Pages と Astro を使ったポートフォリオサイト兼ブログ（maco.life）です。

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 記事の作成

新しいブログ記事を作成するには：

```bash
npm run new-post "記事のタイトル"
```

これにより、`src/content/blog/` 配下に以下のような形式でファイルが作成されます：
- ファイル名: `YYYY-MM-DD-slug.md`
- フロントマター（タイトル、説明、日付、タグ）が自動設定
- 本文のテンプレートが含まれる

作成後、ファイルを開いて以下を編集してください：
1. `description`: 記事の要約
2. `tags`: 関連するタグ
3. 本文: Markdown で記述

## 機能

### ブログ機能
- Markdown で記事作成
- タグ機能（タグ一覧、タグ別記事一覧）
- レスポンシブデザイン（カリグラフィー風）

### コメント・いいね機能
[giscus](https://giscus.app/ja) を使用した GitHub Discussions ベースのコメント・リアクション機能：
- いいね（リアクション）
- コメント投稿
- GitHub アカウントでログイン
- カスタムテーマ（カリグラフィー風）

## プロジェクト構成

```
.
├── index.html              # ポートフォリオ（トップページ）
├── public/
│   └── giscus-theme.css   # giscus カスタムテーマ
├── src/
│   ├── components/
│   │   └── Comments.astro # giscus コメントコンポーネント
│   ├── content/
│   │   └── blog/          # ブログ記事（Markdown）
│   ├── layouts/
│   │   └── BlogLayout.astro  # ブログレイアウト
│   └── pages/
│       └── blog/
│           ├── index.astro        # 記事一覧
│           ├── [...slug].astro    # 記事詳細
│           └── tags/
│               ├── index.astro    # タグ一覧
│               └── [tag].astro    # タグ別記事一覧
├── scripts/
│   └── new-post.mjs       # 記事作成スクリプト
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions設定
```

## デプロイ

`master` ブランチにプッシュすると、GitHub Actions が自動的にビルドしてデプロイします。

## ライセンス

MIT
