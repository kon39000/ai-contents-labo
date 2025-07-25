# 🔧 ドメイン設定修正ガイド

## 🚨 現在の問題
- `ai-contents-labo.com` → ❌ Invalid Configuration
- `www.ai-contents-labo.com` → ⚠️ DNS Change Recommended
- `acl-main.vercel.app` → ✅ Valid Configuration

## 🛠️ 解決方法

### 1. Vercelでのドメイン設定修正

#### ステップ1: Invalid Configurationの解決
1. Vercelダッシュボードで `ai-contents-labo.com` の **Edit** をクリック
2. **Remove Domain** を選択して一旦削除
3. 再度 **Add Domain** で `ai-contents-labo.com` を追加
4. **Redirect** オプションを確認（www付きへのリダイレクト設定）

#### ステップ2: DNS設定の確認
Xserverで以下の設定が正しいか確認：

```
種別: A
名前: @（空欄またはai-contents-labo.com）
内容: 76.76.19.61

種別: CNAME  
名前: www
内容: cname.vercel-dns.com
```

### 2. 推奨設定パターン

#### パターンA: www付きをメインにする（推奨）
```
メインドメイン: www.ai-contents-labo.com
リダイレクト: ai-contents-labo.com → www.ai-contents-labo.com
```

#### パターンB: www無しをメインにする
```
メインドメイン: ai-contents-labo.com  
リダイレクト: www.ai-contents-labo.com → ai-contents-labo.com
```

### 3. 手順詳細

#### Vercel側での操作
1. **プロジェクト選択**: acl-main
2. **Settings** → **Domains**
3. **Invalid Configuration** の `ai-contents-labo.com` を削除
4. 新しく追加する際に：
   - Domain: `ai-contents-labo.com`
   - Redirect to: `www.ai-contents-labo.com` ✅

#### Xserver側での確認
1. **サーバーパネル** → **DNS設定**
2. **DNSレコード追加**で以下を確認：

```bash
# Aレコード（ルートドメイン用）
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600

# CNAMEレコード（www用）  
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 4. トラブルシューティング

#### DNS反映確認コマンド
```bash
# Aレコード確認
nslookup ai-contents-labo.com

# CNAMEレコード確認  
nslookup www.ai-contents-labo.com

# DNS伝播確認（オンラインツール）
# https://dnschecker.org/
```

#### よくある原因
1. **TTL設定が長すぎる** → 1時間（3600秒）に設定
2. **DNS反映待ち** → 最大48時間かかる場合がある
3. **重複レコード** → 古い設定が残っている
4. **Cloudflare干渉** → プロキシ設定をオフにする

### 5. 確認手順

設定完了後、以下をチェック：

1. **ブラウザ確認**
   - https://ai-contents-labo.com （リダイレクトされるか）
   - https://www.ai-contents-labo.com （正常表示されるか）

2. **SSL証明書確認**
   - 鍵マークが表示されるか
   - 証明書エラーが出ないか

3. **Vercelダッシュボード確認**
   - 全ドメインが ✅ Valid Configuration になるか

### 6. 緊急時の対応

すぐに動作させたい場合：
1. **一時的に** `acl-main.vercel.app` を使用
2. ドメイン設定を後で調整
3. `www.ai-contents-labo.com` は比較的安定

### 7. 設定例（推奨）

```
Vercelでの最終設定:
├── acl-main.vercel.app (Primary)
├── www.ai-contents-labo.com (Production) ✅
└── ai-contents-labo.com (Redirect to www) ✅
```

この設定により、どのURLでアクセスしても正常に表示されます。