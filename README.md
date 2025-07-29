# AI Contents Labo 公式サイト

> 1日15分で100円noteから始める副収入 - AI学習コミュニティです

## 🚀 機能

- 📧 **無料メルマガ**: 100円note作成ガイドプレゼント
- 🎥 **週1ウェビナー**: 15分で学べるAI活用術
- 🎉 **メンバーズ**: #ACL成果 ツイート表示機能（X API連携）
- 👥 **コミュニティ**: 実践的な学習サポート
- 🎨 **プロデザイン**: アクセシビリティ対応済み
- ⚡ **高速表示**: Next.js Turbopack対応

## 📁 プロジェクト構成

```
src/
├── app/                 # Next.js App Router
│   ├── about/          # 私たちについて
│   ├── blog/           # ブログ（Sanity CMS連携）
│   ├── webinar/        # 無料ウェビナー
│   ├── community/      # コミュニティ
│   ├── contact/        # お問い合わせ
│   └── newsletter/     # メルマガ登録
├── components/         # 再利用可能なコンポーネント
├── lib/               # ユーティリティ関数
└── sanity/            # Sanity CMS設定
    └── schemas/       # データスキーマ定義
```

## 🛠️ 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

```bash
cp .env.local.example .env.local
```

`.env.local` ファイルを編集して、Sanity の設定を追加してください。

### 3. 開発サーバーの起動

```bash
# Next.js 開発サーバー
npm run dev

# Sanity Studio（別ターミナル）
npm run sanity
```

## 📝 Sanity CMS の設定

### 初回セットアップ

1. [Sanity.io](https://www.sanity.io/) でアカウント作成
2. 新しいプロジェクトを作成
3. プロジェクトIDとデータセット名を `.env.local` に設定

### ブログ記事の管理

- Sanity Studio: `http://localhost:3333`
- 記事の作成・編集・カテゴリ管理が可能

## 🎨 デザインシステム

### カラーパレット
- **Primary**: オレンジ系（#f97316, #ea580c）
- **Secondary**: シアン系（#06b6d4, #0891b2）
- **Warm**: 暖色系背景（#fef9f3, #fef3e2）

### コンポーネント
- `btn-primary`: メインCTAボタン
- `btn-secondary`: サブCTAボタン
- `card-hover`: ホバーエフェクト付きカード
- `section-padding`: セクション共通余白

## 📱 レスポンシブ対応

- **Mobile First**: スマートフォンを基準とした設計
- **Breakpoints**: Tailwind CSS のデフォルト
  - `sm`: 640px以上
  - `md`: 768px以上
  - `lg`: 1024px以上

## 🚀 本番環境へのデプロイ

### Vercel（推奨）

```bash
# Vercel CLI のインストール
npm i -g vercel

# デプロイ
vercel
```

### 環境変数の設定

Vercel Dashboard で以下の環境変数を設定：
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SITE_URL`

## 📈 SEO対策

- メタタグの最適化
- 構造化データ対応
- サイトマップ自動生成
- OGP画像設定

## 🔧 カスタマイズ

### 新しいページの追加

1. `src/app/新ページ名/page.tsx` を作成
2. `src/components/Header.tsx` にナビゲーションリンクを追加
3. 必要に応じて `src/components/Footer.tsx` も更新

### Sanity スキーマの追加

1. `src/sanity/schemas/` に新しいスキーマファイルを作成
2. `src/sanity/schemas/index.ts` に追加
3. Sanity Studio で管理画面を確認

## 📞 サポート

- ウェビナー: 毎週木曜日 20:00-21:00
- Peatix: https://nmo-event.peatix.com/
- メルマガ: サイト内フォームから登録

## 📄 ライセンス

このプロジェクトは AI Contents Labo の所有物です。
