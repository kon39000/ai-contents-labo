# アーカイブされたファイル

このファイルには、LP（ランディングページ）の動作に必要ない、または現在使用されていないファイルの内容をまとめています。

## ドキュメント系ファイル

### DOMAIN_FIX_GUIDE.md
```markdown
# ドメイン修正ガイド

## 概要
Vercelでのカスタムドメイン設定に関する問題の修正手順

## 手順
1. Vercelダッシュボードでドメイン設定を確認
2. DNS設定の確認
3. SSL証明書の確認
```

### DOMAIN_SETUP_GUIDE.md
```markdown
# ドメインセットアップガイド

## Vercelでのカスタムドメイン設定

1. Vercelプロジェクトダッシュボードにアクセス
2. Domainsタブを選択
3. カスタムドメインを追加
4. DNS設定を更新
```

### LEARNING_SITE_REQUIREMENTS.md
```markdown
# 学習サイト要件定義

## 機能要件
- AI学習コンテンツの提供
- ユーザー管理機能
- 進捗管理機能

## 非機能要件
- レスポンシブデザイン
- SEO対応
- パフォーマンス最適化
```

### X_API_SETUP.md
```markdown
# X (Twitter) API セットアップガイド

## 必要なもの
- X Developer アカウント
- API Keys
- Access Tokens

## 設定手順
1. X Developer Portal にアクセス
2. アプリケーションを作成
3. API Keys を取得
4. 環境変数に設定
```

### target-persona.md
```markdown
# ターゲットペルソナ

## メインターゲット
- 年齢: 30-50歳
- 職業: 会社員、主婦
- AI学習に興味がある
- 副収入を得たい

## ニーズ
- 実践的なAI活用スキル
- コミュニティでの学び
- 継続的なサポート
```

### 要件定義書.md
```markdown
# AIコンテンツラボ ウェブサイト要件定義書

## プロジェクト概要
AIを活用したコンテンツ作成を学べるコミュニティサイト

## 機能要件
1. ランディングページ
2. ユーザー登録・ログイン
3. 学習コンテンツ表示
4. コミュニティ機能

## 技術要件
- Next.js 15
- TypeScript
- Tailwind CSS
- Prisma ORM
```

## アセットファイル

### assets/7Days_Practice_Checklist.md
```markdown
# 7日間実践チェックリスト

## Day 1: AI基礎学習
- [ ] ChatGPTアカウント作成
- [ ] 基本的な使い方を覚える

## Day 2: プロンプト作成
- [ ] 効果的なプロンプトの書き方
- [ ] 実際にコンテンツを作成

## Day 3-7: 実践とフィードバック
- [ ] 継続的なコンテンツ作成
- [ ] コミュニティでの共有
```

### assets/ChatGPT_15min_Master_Guide.md
```markdown
# ChatGPT 15分マスターガイド

## 基本操作 (5分)
1. ログイン方法
2. 基本的な質問の仕方
3. 回答の読み方

## 実践的な使い方 (10分)
1. 効果的なプロンプトの作成
2. コンテンツ作成への活用
3. 業務効率化のコツ
```

### assets/Smartphone_Prompt_Collection.md
```markdown
# スマートフォン向けプロンプト集

## コンテンツ作成系
- ブログ記事作成
- SNS投稿文作成
- メルマガ作成

## ビジネス系
- 企画書作成支援
- メール文面作成
- プレゼン資料作成支援
```

## 学習ポータル関連ファイル

### learning-portal/CHATGPT_15MIN_COURSE_OUTLINE.md
```markdown
# ChatGPT 15分コース概要

## コース構成
1. イントロダクション (2分)
2. 基本操作 (5分)
3. 実践演習 (8分)

## 学習目標
- ChatGPTの基本操作をマスター
- 効果的なプロンプト作成スキル習得
- 実践的な活用方法の理解
```

## 未使用コンポーネント

以下のコンポーネントは現在のLPでは使用されていません：

### src/components/未使用コンポーネント一覧
- Footer.tsx
- FooterLP.tsx  
- Header.tsx
- HeaderLP.tsx
- HeroSection.tsx
- MemberResults.tsx
- MemberResultsImproved.tsx
- NewsletterSection.tsx
- NewsletterSectionImproved.tsx
- PremiumCourse.tsx
- Tweet.tsx
- TweetGallery.tsx
- WebinarSection.tsx
- WebinarSectionImproved.tsx

## 未使用ページ

以下のページは現在使用されていません：

### src/app/未使用ページ一覧
- about-us/page.tsx
- about/page.tsx
- blog/
- community/page.tsx
- contact/page.tsx
- faq/page.tsx
- improved/page.tsx
- learn/chatgpt-master/page.tsx
- learn/page.tsx
- members/page.tsx
- news/page.tsx
- newsletter/page.tsx
- privacy/page.tsx
- resources/page.tsx
- success-stories/
- terms/page.tsx
- thanks/page.tsx
- webinar/page.tsx

## API関連

### 未使用API
- src/app/api/announcements/route.ts
- src/app/api/revalidate-tweets/
- src/app/api/tweets/route.ts

## その他のファイル

### member-success-data.md
```markdown
# メンバー成功データ

## 収益化達成者
- Aさん: noteで月5万円達成
- Bさん: Kindle出版で月3万円
- Cさん: オンライン講座で月10万円

## 学習成果
- ChatGPT活用スキル向上: 95%
- コンテンツ作成スキル向上: 87%
- 継続学習率: 78%
```

### test.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>テストページ</title>
</head>
<body>
    <h1>テスト用ページ</h1>
    <p>動作確認用のシンプルなHTMLページです。</p>
</body>
</html>
```

---

**注意**: このアーカイブに含まれるファイルは、現在のLP動作には必要ありませんが、将来的な機能拡張時に参考になる可能性があります。削除する前に、必要に応じて別途バックアップを取ることを推奨します。

## LP動作に必要な最小ファイル構成

現在のLPを動作させるために必要な最小限のファイル：

```
/
├── package.json
├── next.config.js  
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next-env.d.ts
├── preview-lp.html (スタンドアロン版)
├── prisma/
│   └── schema.prisma
├── public/
│   ├── favicon.ico
│   └── images/
│       └── profile.jpg
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    └── components/
        ├── HeroSectionImproved.tsx
        ├── StatsSection.tsx
        ├── ProblemSection.tsx
        ├── LearningStepsSection.tsx
        ├── ThreePillarsSection.tsx
        ├── RoadmapSection.tsx
        ├── TestimonialsSection.tsx
        ├── OperatorInfoSection.tsx
        ├── ProfileSection.tsx
        ├── CompanyInfoSection.tsx
        ├── AnnouncementCard.tsx
        └── TweetCard.tsx
```