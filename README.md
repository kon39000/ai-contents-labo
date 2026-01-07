# AI Contents Labo 公式サイト（新デザイン）

> 1日15分で100円noteから始める副収入 - AI学習コミュニティです

## 📁 プロジェクト構成（App Router）

```
app/                # ルートページ/レイアウト
components/         # 再利用可能なUI
hooks/              # React Hooks
lib/                # ユーティリティ
public/             # 静的アセット
styles/             # グローバルCSS（Tailwind v4）
next.config.mjs     # Next.js 設定
postcss.config.mjs  # Tailwind v4 用 PostCSS 設定
tsconfig.json       # TypeScript 設定
```

## 🛠️ セットアップ

```
pnpm install
pnpm dev
```

ブラウザで `http://localhost:3000` を開きます。

本番ビルド（ネット接続が必要）:

```
pnpm build
pnpm start
```

Tailwind CSS は v4 を使用しており、`app/globals.css` でテーマ変数とアニメーションを定義しています。

## 🚀 デプロイ（Vercel）

`vercel.json` は pnpm を使用する設定になっています。

```
vercel
```

必要に応じて Dashboard で環境変数を設定してください。

## 📄 メモ

- 旧デザイン（Sanity 連携含む）は削除し、新デザインに統合済みです。
- Google Fonts（`next/font/google`）を使用しており、オフライン環境では本番ビルド時に取得に失敗することがあります。オフラインでのビルドが必要な場合はローカルフォント化をご検討ください。
