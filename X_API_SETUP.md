# X API連携機能 セットアップガイド

## 機能概要

- **自動ツイート取得**: `#ACL成果` ハッシュタグ付きツイートを6時間毎に自動収集
- **Sanity連携**: 取得したツイートをSanityに保存し、承認フローで管理
- **メンバーズページ**: 承認されたツイートを美しいUIで表示
- **ISR対応**: コンテンツ更新時に自動でページを再生成

## 必要な環境変数

### Vercel環境変数の設定

以下の環境変数をVercelダッシュボードで設定してください：

```bash
# X API Bearer Token (X Developer Portalで取得)
X_BEARER_TOKEN=your_x_bearer_token_here

# Sanity APIトークン (Sanity管理画面で生成)
SANITY_API_TOKEN=your_sanity_write_token_here

# Cron認証用シークレット (ランダムな文字列)
CRON_SECRET_TOKEN=your_random_secret_here

# ISR再生成用シークレット (ランダムな文字列)
REVALIDATE_SECRET=your_revalidate_secret_here

# Sanityプロジェクト設定 (既に設定済みの場合はスキップ)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## X API設定手順

### 1. X Developer Account作成
1. [X Developer Portal](https://developer.twitter.com/) にアクセス
2. X Premium API（$100/月）にサインアップ
3. プロジェクトを作成

### 2. Bearer Token取得
1. Developer Portalで「Keys and tokens」タブに移動
2. 「Bearer Token」を生成・コピー
3. Vercelの環境変数 `X_BEARER_TOKEN` に設定

## Sanity設定手順

### 1. APIトークン生成
1. [Sanity管理画面](https://sanity.io/manage) にアクセス
2. プロジェクト設定 → API → Tokens
3. 「Add API token」で書き込み権限付きトークンを作成
4. Vercelの環境変数 `SANITY_API_TOKEN` に設定

### 2. スキーマ更新
```bash
# 新しいtweetスキーマをデプロイ
npm run sanity:deploy
```

## Cron動作確認

### 手動実行テスト
```bash
curl -X POST https://your-app.vercel.app/api/fetchTweets \
  -H "Authorization: Bearer your_cron_secret_token"
```

### 動作スケジュール
- **実行頻度**: 6時間毎（00:00, 06:00, 12:00, 18:00 UTC）
- **取得件数**: 最新100件
- **重複対策**: 既存ツイートIDをチェックして重複登録を防止

## ツイート承認フロー

### Sanity Studioでの承認手順
1. Sanity Studio（`/studio`）にアクセス
2. 「Tweet」セクションで未承認ツイート（❌）を確認
3. 内容を確認して「approved」フィールドを`true`に変更
4. 保存すると自動的にメンバーズページに表示

### 承認基準（推奨）
- ✅ 実際の成果報告である
- ✅ 適切な内容・表現である
- ✅ ACLに関連する内容である
- ❌ スパムや宣伝目的でない
- ❌ 不適切な表現を含まない

## トラブルシューティング

### よくある問題

**Q: ツイートが取得されない**
A: 以下を確認してください
- X_BEARER_TOKENが正しく設定されているか
- X API Premium subscriptionが有効か
- Cron job が実行されているか（Vercel Functions logs確認）

**Q: Sanityに保存されない**
A: 以下を確認してください
- SANITY_API_TOKENに書き込み権限があるか
- Sanityスキーマがデプロイされているか
- Sanity client設定が正しいか

**Q: メンバーズページにツイートが表示されない**
A: 以下を確認してください
- ツイートの`approved`フィールドが`true`になっているか
- ISR revalidationが実行されているか
- ブラウザキャッシュをクリアしてみる

### ログ確認方法
```bash
# Vercel Function logs
vercel logs your-app-name

# Sanity Studio logs
# Studio内のNetworkタブで通信エラーを確認
```

## セキュリティ考慮事項

- ✅ APIトークンは環境変数で管理
- ✅ Cron実行には認証トークンが必要
- ✅ 未承認ツイートはビルドに含めない
- ✅ 外部リンクは`noopener noreferrer`で安全性確保

## 機能拡張案

- [ ] ツイート自動承認（特定条件下）
- [ ] メール通知（新規ツイート取得時）
- [ ] ツイート統計ダッシュボード
- [ ] ハッシュタグフィルタリング
- [ ] いいね・リツイート数でのソート機能